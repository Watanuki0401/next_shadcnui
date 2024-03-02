import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Pin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-[53rem] py-5">
          <Alert>
            <Pin />
            <AlertTitle>NOTIFICATION</AlertTitle>
            <AlertDescription>
              このページは現在、Next.jsの勉強用に構築されておりレイアウトが崩れている可能性があります。
              参考サイト：<Link href={"https://ui.shadcn.com"}>shadcn/ui</Link>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </>
  );
}
