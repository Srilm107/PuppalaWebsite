import { useQuery } from "@tanstack/react-query";
import { Download, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Profile } from "@shared/schema";

export default function PortfolioHero() {
  const { data: profile, isLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  if (isLoading) {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded mb-6 w-96"></div>
            <div className="h-8 bg-muted rounded mb-4 w-64"></div>
            <div className="h-32 bg-muted rounded mb-8"></div>
            <div className="flex gap-4">
              <div className="h-12 bg-muted rounded w-48"></div>
              <div className="h-12 bg-muted rounded w-48"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load profile information</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {profile.name}
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-primary mb-6 font-medium">
              {profile.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {profile.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a href={`mailto:${profile.email}`} className="text-foreground hover:text-primary transition-colors">
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a href={`tel:${profile.phone}`} className="text-foreground hover:text-primary transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                  {profile.linkedin && (
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 text-primary mr-3" />
                      <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                  {profile.location && (
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <span className="text-foreground">{profile.location}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}