import { Shield, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança Certificada",
      description: "Produtos com certificação ABNT e aprovação do Corpo de Bombeiros",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Trabalhamos apenas com as melhores marcas do mercado",
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Equipe experiente e treinada para melhor atendê-lo",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Qualidade e Tradição em
            <span className="block text-accent mt-2">Redes de Proteção</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com experiência no mercado, nossa missão é sempre trazer segurança
            para seu lar, garantindo sua satisfação e tranquilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
