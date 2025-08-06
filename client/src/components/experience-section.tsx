import { useQuery } from "@tanstack/react-query";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@shared/schema";

export default function ExperienceSection() {
  const { data: experience, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experience"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!experience || experience.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">No experience data available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments in the technology industry
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp) => (
            <Card key={exp.id} className="shadow-lg border hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center text-primary font-medium mb-2">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    {exp.location && (
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    )}
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {exp.description.map((desc, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}