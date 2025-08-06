import { useQuery } from "@tanstack/react-query";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Profile } from "@shared/schema";

export default function PortfolioContact() {
  const { data: profile, isLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-md mx-auto"></div>
          </div>
          <div className="animate-pulse">
            <div className="h-96 bg-muted rounded-2xl"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load contact information</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's connect and discuss potential opportunities or collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="shadow-lg border">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href={`mailto:${profile.email}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href={`tel:${profile.phone}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>
              
              {profile.linkedin && (
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              )}
              
              {profile.location && (
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">{profile.location}</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-lg border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="Let's work together" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}