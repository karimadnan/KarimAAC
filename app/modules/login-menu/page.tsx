import { Button } from "@karimACC/app/ui/components/button";
import { Input } from "@karimACC/app/ui/components/input";

export default function LoginMenu() {
  return (
    <div className="bg-white rounded-md p-5">
      <Input className="mb-3" placeholder="Email" type="email" />
      <Input placeholder="password" type="password" />
      <Button className="w-full my-2">Login</Button>
      <Button className="w-full" variant="positive">
        Creat Account
      </Button>
    </div>
  );
}
