import { useQuery } from "@tanstack/react-query";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Education, Certifications } from "@shared/schema";

export default function EducationSection() {
  const { data: education, isLoading: educationLoading } = useQuery<Education[]>({
    queryKey: ["/api/education"],
  });

  const { data: certifications, isLoading: certificationsLoading } = useQuery<Certifications[]>({
    queryKey: ["/api/certifications"],
  });

  const isLoading = educationLoading || certificationsLoading;

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-32 bg-muted rounded-xl"></div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-24 bg-muted rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education?.map((edu) => (
                <Card key={edu.id} className="shadow-md border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        {edu.year}
                      </Badge>
                    </div>
                    {edu.location && (
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications?.map((cert) => (
                <Card key={cert.id} className="shadow-md border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{cert.name}</h4>
                        {cert.issuer && (
                          <p className="text-primary font-medium">{cert.issuer}</p>
                        )}
                      </div>
                      {cert.year && (
                        <Badge variant="outline" className="ml-4">
                          {cert.year}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}