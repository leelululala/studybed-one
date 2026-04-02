import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AuthCard = ({ title, description, children, footer }) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="border-gray-300">{footer}</CardFooter>
    </Card>
  );
};
export default AuthCard;
