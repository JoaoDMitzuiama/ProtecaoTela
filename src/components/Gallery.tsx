import gallery1 from "@/assets/galeria-janela.jpg";
import gallery2 from "@/assets/galeria-mezanino.jpg";
import gallery3 from "@/assets/imagem3.jpeg";
import gallery4 from "@/assets/imagem4.jpeg";
import gallery5 from "@/assets/imagem5.jpeg";
import gallery6 from "@/assets/imagem6.jpeg";


const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Rede de proteção instalada em janela de apartamento",
      title: "Janelas e Sacadas",
    },
    {
      src: gallery2,
      alt: "Rede de proteção em área de recreação infantil",
      title: "Área Kids",
    },
    {
      src: gallery3,
      alt: "Rede de proteção em área de recreação infantil",
      title: "Proteção para pets",
    },
    {
      src: gallery4,
      alt: "Rede de proteção instalada em janela de apartamento",
      title: "",
    },
    {
      src: gallery5,
      alt: "Rede de proteção em área de recreação infantil",
      title: "",
    },
    {
      src: gallery6,
      alt: "Rede de proteção em área de recreação infantil",
      title: "",
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Veja Alguns de
            <span className="block text-accent mt-2">Nossos Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instalações realizadas com excelência e atenção aos detalhes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-heading font-semibold text-white">
                  {image.title}
                </h3>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
