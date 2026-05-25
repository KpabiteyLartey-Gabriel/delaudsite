"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  adminLogin,
  ADMIN_INFO_STORAGE_KEY,
  ADMIN_TOKEN_STORAGE_KEY,
  getErrorMessage,
  getNextPasswordInputType,
  PasswordInputType,
} from "@/lib/admin-auth";

export default function AdminLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [passwordType, setPasswordType] = useState<PasswordInputType>("password");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Validation
    if (!email || !password) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "⚠️ Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      toast({
        title: "⏳ Logging in...",
        description: "Please wait while we authenticate your credentials.",
      });

      const data = await adminLogin(email, password);
      localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, data.token);
      localStorage.setItem(ADMIN_INFO_STORAGE_KEY, JSON.stringify(data.admin));
      
      toast({
        title: "✅ Login Successful!",
        description: "Welcome back! Redirecting to dashboard...",
      });
      
      router.push("/dashboard");
    } catch (err: any) {
      const errorMessage = getErrorMessage(err, "Network error occurred");
      setError(errorMessage);
      toast({
        title: "❌ Login Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-2">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo placeholder */}
        <div className="mb-6 flex justify-center w-full">
          <img src="/logo.jpg" alt="Logo" className="h-16 w-auto max-w-[120px] md:max-w-[160px]" />
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 rounded shadow-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-center text-green-700">Admin Login</h2>
          {error && <div className="text-red-600 text-center text-sm break-words">{error}</div>}
          <div>
            <label className="block mb-1 font-medium text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Password</label>
            <div className="relative">
              <input
                type={passwordType}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full border rounded px-3 py-2 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="button"
                aria-label={passwordType === "password" ? "Show password" : "Hide password"}
                onClick={() => setPasswordType(getNextPasswordInputType(passwordType))}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                {passwordType === "password" ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition text-base"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 w-full flex flex-col items-center">
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(window.location.origin + "/");
              setCopied(true);
              toast({
                title: "📋 Form Link Copied!",
                description: "The patient form link has been copied to your clipboard.",
              });
              setTimeout(() => setCopied(false), 1500);
            }}
            className="text-green-700 hover:underline text-sm font-medium bg-transparent border-none cursor-pointer focus:outline-none"
          >
            Copy Form Link
          </button>
          {copied && <span className="text-green-600 text-xs mt-1">Copied!</span>}
        </div>
      </div>
    </div>
  );
} 