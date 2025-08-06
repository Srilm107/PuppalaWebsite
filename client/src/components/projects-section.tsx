import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { ExternalLink, Github, Code, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Projects } from "@shared/schema";

export default function ProjectsSection() {
  const [, setLocation] = useLocation();
  const { data: projects, isLoading } = useQuery<Projects[]>({
    queryKey: ["/api/projects"],
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
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-96 bg-muted rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">No projects data available</p>
        </div>
      </section>
    );
  }

  const getGradientColor = (index: number) => {
    const gradients = [
      "from-blue-500 to-blue-400",
      "from-emerald-500 to-emerald-400", 
      "from-purple-500 to-purple-400",
      "from-orange-500 to-orange-400",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-shadow border"
            >
              <CardHeader
                className={`bg-gradient-to-r ${getGradientColor(index)} p-6`}
              >
                <div className="flex items-center justify-between text-white">
                  <Code className="h-6 w-6" />
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-white mt-4">
                  {project.title}
                </CardTitle>
                {project.duration && (
                  <div className="flex items-center text-white/80 mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    {project.description.slice(0, 2).map((desc, descIndex) => (
                      <p key={descIndex} className="text-muted-foreground text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={() => setLocation(`/project/${project.id}`)}
                      className="flex-1"
                      size="sm"
                    >
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}