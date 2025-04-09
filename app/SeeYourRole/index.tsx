import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PlayerCardProps {
  name: string;
  role: string;
  hint: string;
  onClick?: () => void;  // Add onClick prop
}

function PlayerCard({ name, role, hint, onClick }: PlayerCardProps) {
  return (
    <div className="mx-auto p-4">
      <Dialog>
        <DialogTrigger asChild>
          <button onClick={onClick} className="w-full text-left">
            {name}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ROLE: <span className='underline'>{role}</span></DialogTitle>
            <DialogDescription>
              <h4 className="text-3xl">{role === "spy" ? "Hint" : "Word"}: {hint}</h4>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlayerCard;