import { Button } from '@/components/ui/button';

const CreationOptionButton = ({ icon: Icon, title, description, onClick }) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="w-full h-auto p-4 justify-start whitespace-normal"
    >
      <div className="flex items-center gap-4 text-left">
        <Icon className="shrink-0 w-10! h-10! text-mist-700" />

        <div className="flex flex-col min-w-0">
          <div>{title}</div>
          <div className="text-gray-500 font-normal leading-relaxed break-keep">
            {description}
          </div>
        </div>
      </div>
    </Button>
  );
};
export default CreationOptionButton;
