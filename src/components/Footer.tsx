import { Phone, Mail, Clock, Shield } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      items: [
        { text: "(11) 98338 - 8016", href: "https://wa.me/5511983388016" },
        
      ],
    },
    {
      icon: Mail,
      title: "Email",
      items: [
        {
          text: "contato@redesprotecoes.com.br",
          href: "mailto:contato@redesprotecoes.com.br",
        },
      ],
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      items: [{ text: "Segunda a Sexta", href: null }, { text: "08h às 18h", href: null }],
    },
  ];

  return (
    <footer id="contato" className="gradient-card text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Entre em Contato
          </h2>
          <p className="text-white/80">
            Estamos prontos para atender você e sua família
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 100}ms`, backgroundColor: '#3c3c3c' }}
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/20 mb-4">
                <info.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.items.map((item, idx) => (
                  <div key={idx}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/80 hover:text-accent transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-white/80">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-accent" />
            <span className="font-heading font-semibold text-lg">
              Vieira Redes
            </span>
          </div>
          <p className="text-white/60 text-sm">
            &copy; 2025 Vieira Redes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
