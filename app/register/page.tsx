import PatientRegistrationForm from "@/components/patient/patient-registration-form"
import { Toaster } from "@/components/ui/toaster"

export default function RegisterPage() {
  return (
    <>
      <PatientRegistrationForm />
      <Toaster />
    </>
  )
}
