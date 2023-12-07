import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Stats from "@/components/shared/Stats";
import QuestionTab from "@/components/shared/QuestionTab";
import AnswersTab from "@/components/shared/AnswersTab";

import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();
  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <>
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={userInfo?.user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <div className="mt-3">
            <h2 className="h2-bold text-dark100_light900">
              {userInfo.user.name}
            </h2>
          </div>
        </div>
      </div>

      <Stats
        totalQuestions={userInfo.totalQuestions}
        totalAnswers={userInfo.totalAnswers}
      />

      <div className="mt-10 flex gap-10">
        Top Posts Answers
        <QuestionTab
          searchParams={searchParams}
          userId={userInfo.user._id}
          clerkId={clerkId}
        />
        Answers
        <AnswersTab
          searchParams={searchParams}
          userId={userInfo.user._id}
          clerkId={clerkId}
        />
      </div>
    </>
  );
};

export default Page;
