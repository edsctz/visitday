import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  neighborhoodName: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
      <div className="mb-6">
        <svg className="h-8 w-8 text-[#BEAF87] mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-[#252526] italic leading-relaxed">{quote}</p>
      </div>
      
      <div className="mt-auto flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold text-[#252526]">{author}</p>
          <p className="text-sm text-[#727273]">{role}</p>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsProps {
  neighborhoodName: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ neighborhoodName }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#252526]">O Que Nossos Clientes Dizem</h2>
        <p className="text-center text-[#727273] mb-16 max-w-2xl mx-auto">
          Depoimentos de pessoas que encontraram seu lar ideal em {neighborhoodName} com nossa assistência.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote={`O serviço de concierge da Century 21 Alpha foi excepcional. Eles selecionaram apenas casas que realmente se encaixavam no nosso estilo de vida em ${neighborhoodName}, o que economizou muito do nosso tempo.`}
            author="Ana Beatriz Mendes"
            role={`Proprietária em ${neighborhoodName}`}
            image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=256"
            neighborhoodName={neighborhoodName}
          />
          <Testimonial 
            quote={`Encontramos nossa casa dos sonhos em ${neighborhoodName} graças à abordagem personalizada da equipe. Eles entenderam exatamente o que procurávamos e só nos mostraram propriedades que faziam sentido.`}
            author="Ricardo e Camila Almeida"
            role={`Família residente em ${neighborhoodName}`}
            image="https://images.pexels.com/photos/3987524/pexels-photo-3987524.jpeg?auto=compress&cs=tinysrgb&w=256"
            neighborhoodName={neighborhoodName}
          />
          <Testimonial 
            quote={`O Dia de Visitas personalizado que a Century 21 Alpha organizou para mim foi perfeito. Logo na segunda visita, eu soube que tinha encontrado meu lar em ${neighborhoodName} - sem perder tempo visitando dezenas de casas.`}
            author="Marcelo Tavares"
            role={`Executivo e morador de ${neighborhoodName}`}
            image="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=256"
            neighborhoodName={neighborhoodName}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;