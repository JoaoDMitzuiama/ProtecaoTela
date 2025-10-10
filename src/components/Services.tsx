import { Building2, Baby, Waves, Home, Fence } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Sacadas e Janelas",
      description:
        "Proteção completa para sacadas, janelas e varandas de apartamentos e casas",
    },
    {
      icon: Baby,
      title: "Pet e Kids",
      description:
        "Proteção especial para crianças e pets, garantindo lazer e conforto com segurança",
    },
    {
      icon: Fence,
      title: "Escadas",
      description:
        "Protegemos os arredores de suas escadas, diminuindo riscos para toda família",
    },
    {
      icon: Home,
      title: "Estruturas Personalizadas",
      description:
        "Estruturas feitas sob medida para atender suas necessidades específicas",
    },
    {
      icon: Waves,
      title: "Piscinas",
      description:
        "Proteção para piscinas, unindo tranquilidade, segurança e lazer",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Nossas Soluções em
            <span className="block text-accent mt-2">Proteção</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos proteção completa para todos os ambientes da sua casa ou
            empresa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl gradient-card p-8 hover:scale-[1.02] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-accent blur-xl transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-accent/20">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>

                <h3 className="text-xl font-heading font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
