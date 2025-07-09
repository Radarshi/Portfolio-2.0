import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building, FileText, Mail, Phone, User, X } from 'lucide-react';
import { useState } from 'react';

interface CollaborationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollaborationForm: React.FC<CollaborationFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    collaboration_area: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/collaborate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit collaboration request');
      }

      const data = await response.json();
      alert('Collaboration request submitted successfully!');
      onClose();
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className=" inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <Card className="bg-white shadow-2xl">
            <CardHeader className="relative">
              <Button
                onClick={onClose}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4"
              >
                <X size={16} />
              </Button>
              <CardTitle className="text-2xl font-bold text-gray-900 pr-12">
                Collaborate With Us
              </CardTitle>
              <p className="text-gray-600">
                Tell us about your project or idea.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User size={16} />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={16} />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone size={16} />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="organization"
                    className="flex items-center gap-2"
                  >
                    <Building size={16} />
                    Organization / Company
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization or company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="collaboration_area"
                    className="flex items-center gap-2"
                  >
                    <FileText size={16} />
                    Collaboration Area
                  </Label>
                  <select
                    id="collaboration_area"
                    name="collaboration_area"
                    value={formData.collaboration_area}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="webdev">Web Development</option>
                    <option value="appdev">Mobile App Development</option>
                    <option value="design">Design & UI/UX</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <FileText size={16} />
                    Message / Details
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project or how you'd like to collaborate"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollaborationForm;
