import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AuthCard = ({
  title,
  description,
  children,
  footer,
  linkText,
  linkButtonText,
  onLinkClick,
}) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <CardDescription className="text-xl font-semibold text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="border-gray-300 flex flex-col gap-3">
        {footer}
        <Separator />
        <div className="flex flex-col items-center justify-center">
          <div className="text-muted-foreground">{linkText}</div>
          <Button variant="link" onClick={onLinkClick}>
            {linkButtonText}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default AuthCard;
