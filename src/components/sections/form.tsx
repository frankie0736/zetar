import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const Form = () => {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
      <div className="flex gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="firstname">First Name</Label>
          <Input type="text" id="firstname" placeholder="First Name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastname">Last Name</Label>
          <Input type="text" id="lastname" placeholder="Last Name" />
        </div>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" placeholder="Subject" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
        Send Message
      </Button>
    </div>
  );
};
