import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  const workSpace = await db.workSpace.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (workSpace) {
    return redirect(`/workSpace/${workSpace.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
