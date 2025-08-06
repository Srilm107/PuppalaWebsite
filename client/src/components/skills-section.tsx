import { useQuery } from "@tanstack/react-query";
import { Code, Database, Globe, Users, Award, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Skills } from "@shared/schema";

export default function SkillsSection() {
  const { data: skills, isLoading } = useQuery<Skills[]>({
    queryKey: ["/api/skills"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-muted rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!skills || skills.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load skills data</p>
        </div>
      </section>
    );
  }

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case "programming languages":
        return <Code className="h-6 w-6 text-primary" />;
      case "web development":
        return <Globe className="h-6 w-6 text-primary" />;
      case "database management":
        return <Database className="h-6 w-6 text-primary" />;
      case "software development":
        return <Award className="h-6 w-6 text-primary" />;
      case "soft skills":
        return <Users className="h-6 w-6 text-primary" />;
      case "languages":
        return <Languages className="h-6 w-6 text-primary" />;
      default:
        return <Code className="h-6 w-6 text-primary" />;
    }
  };

  const getGradientForCategory = (index: number) => {
    const gradients = [
      "from-blue-500 to-blue-400",
      "from-emerald-500 to-emerald-400",
      "from-purple-500 to-purple-400",
      "from-orange-500 to-orange-400",
      "from-pink-500 to-pink-400",
      "from-indigo-500 to-indigo-400"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="skills" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.id} className="overflow-hidden hover:shadow-xl transition-shadow border">
              <CardHeader className={`bg-gradient-to-r ${getGradientForCategory(index)} p-6`}>
                <CardTitle className="flex items-center text-white">
                  {getIconForCategory(skillGroup.category)}
                  <span className="ml-3">{skillGroup.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
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