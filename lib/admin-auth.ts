const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export const ADMIN_TOKEN_STORAGE_KEY = "adminToken"
export const ADMIN_INFO_STORAGE_KEY = "adminInfo"

export type PasswordInputType = "password" | "text"

export interface AdminInfo {
  id: string
  email: string
}

export interface AdminLoginResponse {
  token: string
  admin: AdminInfo
}

export interface UpdatePasswordPayload {
  currentPassword: string
  newPassword: string
  confirmNewPassword?: string
}

class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = "ApiError"
    this.status = status
  }
}

function buildApiUrl(path: string): string {
  const normalizedBase = API_BASE_URL.replace(/\/+$/, "")
  const baseWithApi = /\/api$/i.test(normalizedBase)
    ? normalizedBase
    : `${normalizedBase}/api`

  return `${baseWithApi}${path}`
}

async function readErrorMessage(response: Response, fallbackMessage: string) {
  try {
    const data = (await response.json()) as { message?: string }
    return data.message || fallbackMessage
  } catch {
    return fallbackMessage
  }
}

export function getNextPasswordInputType(currentType: PasswordInputType): PasswordInputType {
  return currentType === "password" ? "text" : "password"
}

export async function adminLogin(email: string, password: string): Promise<AdminLoginResponse> {
  const response = await fetch(buildApiUrl("/auth/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const message = await readErrorMessage(response, "Login failed")
    throw new ApiError(message, response.status)
  }

  return (await response.json()) as AdminLoginResponse
}

export async function updateAdminPassword(token: string, payload: UpdatePasswordPayload) {
  const response = await fetch(buildApiUrl("/auth/update-password"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const message = await readErrorMessage(response, "Failed to update password")
    throw new ApiError(message, response.status)
  }

  return (await response.json()) as { message: string }
}

export function isUnauthorizedError(error: unknown): boolean {
  return error instanceof ApiError && error.status === 401
}

export function getErrorMessage(error: unknown, fallbackMessage: string): string {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return fallbackMessage
}
