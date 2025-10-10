import { CheckCircle2, ShieldCheck } from "lucide-react";

const Quality = () => {
  const certifications = [
    "LA Falcão Bauer",
    "ABNT",
    "Corpo de Bombeiros",
    "Inmetro",
  ];

  const brands = [
    "Redes Equiplex",
    "Redes Lahumann",
    "Redes BKT",
    "Redes Sauter",
    "Redes Papitex",
  ];

  return (
    <section id="qualidade" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Resistência e Qualidade
            <span className="block text-accent mt-2">Comprovadas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos apenas com produtos certificados e marcas reconhecidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Certifications */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 animate-slide-up"
          style={{backgroundColor: '#3c3c3c' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Certificações
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Redes de polietileno de alta densidade com qualidade certificada por:
            </p>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div
            className="p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "100ms", backgroundColor: '#3c3c3c' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Marcas Premium
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Redes com Anti UV - Proteção Solar e Impermeáveis, com tratamentos
              antioxidantes:
            </p>

            <ul className="space-y-3">
              {brands.map((brand, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{brand}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
