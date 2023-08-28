import { Dispatch, SetStateAction } from "react";
import PasswordSection from "./password-section";
import EmailSection from "./email-section";
import { DEFAULT_ACCESS_FORM_TYPE } from "@/pages/view/[linkId]";
import { Button } from "@/components/ui/button";


export default function AccessForm({
  onSubmitHandler,
  data,
  setData,
  requireEmail,
  requirePassword
}: {
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
  data: DEFAULT_ACCESS_FORM_TYPE;
  setData: Dispatch<SetStateAction<DEFAULT_ACCESS_FORM_TYPE>>;
  requireEmail: boolean;
  requirePassword: boolean;
}) {

  return (
    <>
      <div className="flex h-screen flex-1 flex-col  px-6 py-12 lg:px-8 bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-white">
            Name requests your action to continue
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-4" onSubmit={onSubmitHandler}>
            {requireEmail ? <EmailSection {...{ data, setData }} /> : null}
            {requirePassword ? <PasswordSection {...{ data, setData }} /> : null}

            <div className="flex justify-center">
              <Button type="submit" className="w-1/3">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
