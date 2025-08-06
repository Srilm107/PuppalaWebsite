import { useQuery } from "@tanstack/react-query";
import { User, Target, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Profile } from "@shared/schema";

export default function AboutSection() {
  const { data: profile, isLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-pulse">
              <div className="h-64 bg-muted rounded-xl"></div>
            </div>
            <div className="animate-pulse">
              <div className="h-64 bg-muted rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, expertise, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-6 w-6 text-primary mr-3" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">
                {profile.summary}
              </p>
              <p className="text-muted-foreground">
                Currently pursuing a Master's in Information Technology Management while 
                building practical experience in software development and database management.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-md border">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="h-5 w-5 text-primary mr-3" />
                  Core Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>• Full-stack web development</li>
                  <li>• Database design and management</li>
                  <li>• Software quality assurance</li>
                  <li>• Project execution and planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md border">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="h-5 w-5 text-primary mr-3" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>• Developed multiple web applications</li>
                  <li>• AWS Academy Cloud Foundations certified</li>
                  <li>• Cambridge English Business certified</li>
                  <li>• Strong academic performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}