import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function PlayerCard({ name, role, hint }: { name: string, role: string, hint: string }) {
return (
    <div className="mx-auto p-4">
      <Dialog>
        <DialogTrigger>{name}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ROLE :  <span className='underline'>{role}</span></DialogTitle>
            <DialogDescription>
            <h4>{role === "spy" ? "hint" : "word"}:{hint}</h4>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlayerCard;
