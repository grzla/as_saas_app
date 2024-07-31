import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import chalk from "chalk";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  console.log(chalk.redBright("ADD TRANSFORMATION TYPE PAGE"));

  const { userId } = auth();
  console.log(
    chalk.bgRedBright(`userID from add transformation page: ${userId}`)
  );
  const transformation = transformationTypes[type];

  // if (!userId) redirect("/sign-in");
  console.log(
    chalk.bgRedBright(`add transformation page right before GETUSERBYID`)
  );
  const user = await getUserById(userId);
  console.log(chalk.bgRedBright(`add transformation page AFTER GETUSERBYID`));

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subtitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationTypePage;
