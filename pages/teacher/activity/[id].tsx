import TeacherActivityContainer from "features/teacherActivity/Container";
import { useRouter } from "next/router";

const TeacherActivitiesPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <TeacherActivityContainer />;
};

export default TeacherActivitiesPage;
