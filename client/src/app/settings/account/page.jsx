import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/components/settings/account-form"

export default function Page() {
  return (
    <div className="space-y-6 max-w-[90%] mb-10 m-auto flex flex-col justify-center ">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
