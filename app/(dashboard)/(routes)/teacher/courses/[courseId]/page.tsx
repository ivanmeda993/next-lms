interface ICoursePageProps {
  params: {
    courseId: string;
  };
}
const CoursePage = ({ params: { courseId } }: ICoursePageProps) => {
  return <div>Course ID: {courseId}</div>;
};

export default CoursePage;
