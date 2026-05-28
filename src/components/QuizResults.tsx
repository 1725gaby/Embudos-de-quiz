import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Gift, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Clock,
  ClipboardList,
  Star,
  Smartphone
} from 'lucide-react';

export function QuizResults() {
  const [timeLeft, setTimeLeft] = useState(531); // 08:51 in seconds
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const ctaButton = (
  <a
    href="https://pay.hotmart.com/C105635039U?checkoutMode=10"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="w-full bg-[#2f5d3a] hover:bg-[#26472b] text-white py-5 px-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#2f5d3a]/20 mb-6 group whitespace-nowrap" style={{ fontSize: '18px', lineHeight: '24px' }}>
      QUIERO EMPEZAR 🥰
      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
    </button>
  </a>
  );

  const faqs = [
    { q: "¿Realmente funciona la chía para perder peso?", a: "¡Absolutamente! La chía es uno de los súper alimentos más poderosos para la pérdida de peso natural. Absorbe hasta 12 veces su peso en agua, lo que te mantiene saciada por horas y acelera tu metabolismo de forma natural. Nuestro protocolo ha sido probado por miles de mujeres con resultados comprobados." },
    { q: "¿Es seguro? ¿Puede afectar mi salud?", a: "El protocolo es 100% natural y seguro. La chía es un súper alimento milenario usado desde tiempos ancestrales. Sin embargo, si tienes alguna condición médica específica, siempre recomendamos consultar con tu médico antes de iniciar cualquier plan alimenticio." },
    { q: "¿Por qué está tan económico?", a: "Queremos que todas las mujeres tengan acceso a este protocolo, sin importar su situación económica. Por eso lo ofrecemos a un precio súper accesible. Un plan personalizado con nutricionista costaría más de $200. Aquí lo tienes por menos de $7." },
    { q: "¿Cuándo voy a empezar a ver resultados?", a: "Los primeros resultados los ves desde la primera semana - principalmente desinflamación y reducción de medidas. La pérdida de peso más notable comienza en la semana 2, y para la semana 3 ya habrás alcanzado tu meta de 9-12kg." },
    { q: "¿Qué pasa si no me funciona?", a: "Tienes 7 días de garantía total. Si por cualquier motivo no estás satisfecha con el protocolo, te devolvemos el 100% de tu dinero, sin preguntas complicadas. No tienes absolutamente nada que perder." },
    { q: "¿Cómo recibo el material después de la compra?", a: "Inmediatamente después del pago recibes un email con todos los accesos. Podrás entrar al contenido desde cualquier dispositivo y empezar el mismo día." },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 pb-12 font-sans antialiased text-[#2C2C2C]">
      
      <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden">
        
        {/* 1. BARRA SUPERIOR (URGENCIA) */}
        <div className="bg-[#FFF9C4] py-3 text-center border-b border-[#FFF176]">
          <p className="text-[14px] font-bold flex items-center justify-center gap-2 text-[#827717]">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> Tu protocolo expira en:</span> 
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </p>
        </div>

        <div className="p-6 sm:p-10 space-y-7">
          
          {/* 2. ICONO + CONFIRMACIÓN */}
          <section className="text-center space-y-4">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="inline-flex items-center justify-center w-20 h-20 bg-[#E8F5E9] rounded-full mb-2"
              style={{ color: '#2f5d3a' }}
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>
            <h1 className="font-extrabold leading-tight" style={{ fontSize: '20px' }}>
              ¡Tu Protocolo Personalizado con Chía se ha generado con éxito!
            </h1>
            <p className="text-red-600 font-semibold max-w-sm mx-auto" style={{ fontSize: '13px', lineHeight: '16px' }}>
              Basado en tus respuestas, es único y se genera solo una vez, no salgas de esta página para no perderlo
            </p>
          </section>

          {/* 3. BLOQUE TESTIMONIO */}
          <section className="space-y-4">
            <h2 className="font-bold text-center" style={{ fontSize: '17px' }}>Final antes y despues</h2>
            <div className="bg-[#F5F5F5] p-4 rounded-2xl">
              <img 
                src="https://i.imgur.com/CT46DTQ.jpeg" 
                alt="Testimonio Antes y Después" 
                className="w-full h-auto rounded-xl shadow-sm mb-6"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-3 px-2">
                <p 
                  className="text-gray-600 font-medium"
                  style={{ fontSize: '13px', lineHeight: '19px' }}
                >
                  "No sentí que estaba a dieta y los resultados llegaron desde la primera semana."
                </p>
                <p className="font-bold text-gray-400" style={{ fontSize: '13px' }}>— Erika Gabriela, 34 años</p>
              </div>
            </div>
          </section>

          {/* 4. BLOQUE PROTOCOLO (CARD VERDE) */}
          <section className="bg-[#E8F5E9] p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex flex-col gap-1 mb-2 text-center">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#2f5d3a] text-center">
                TU PROTOCOLO EXCLUSIVO
              </h3>
              <p className="text-gray-700 font-bold px-1 text-sm mt-2 text-center">Plan completo 21 días 🎯</p>
              <p 
                className="px-1 text-gray-600"
                style={{ 
                  textAlign: 'left',
                  fontStyle: 'normal',
                  fontSize: '12px',
                  lineHeight: '13.5px'
                }}
              >
                Siguiendo correctamente el protocolo, mira qué ocurre:
              </p>
            </div>
            
            <div className="grid gap-3">
              {[
                { title: "Semana 1", desc: "Desinflamación y pérdida de las primeras tallas", icon: "⭐" },
                { title: "Semana 2", desc: "Restauración Metabólica (pérdida de hasta 3k)", icon: "📉" },
                { title: "Semana 3", desc: "Aceleración Metabólica (pérdida de 5 a 7kg)", icon: "⚡️" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-[#C8E6C9] flex gap-3 items-center">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-[#2f5d3a]">{item.title}</p>
                    <p 
                      className="text-[13px] text-gray-600 font-medium"
                      style={{ lineHeight: '14.5px' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="bg-white p-4 rounded-xl shadow-md border-2 border-[#2f5d3a] flex gap-3 items-center transform scale-105 my-2">
                <span className="text-xl shrink-0">🔥</span>
                <div>
                  <p className="font-bold text-sm text-[#2f5d3a]">Semana 4 (GOL)</p>
                  <p 
                    className="text-[13px] text-gray-800 font-bold"
                    style={{ lineHeight: '14.5px' }}
                  >
                    Alcanzas tu meta de 9 a 12kg
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. BLOQUE STACK DE VALOR */}
          <section className="space-y-4">
            <div className="text-left space-y-1 mb-6">
              <h3 
                className="font-bold"
                style={{ fontSize: '15px', lineHeight: '19.6667px' }}
              >
                Recetas con Chia + Protocolo completo + Detox Anti-inflamatorio
              </h3>
              <p 
                className="font-bold uppercase tracking-widest"
                style={{ 
                  color: '#e18328', 
                  fontSize: '11px', 
                  fontFamily: 'Arial',
                  lineHeight: '21.5714px'
                }}
              >
                Acceso vitalicio
              </p>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: "Detox Anti-inflamatorio",
                  desc: "Diseñado para ayudarte a reducir inflamación, eliminar exceso de líquidos y preparar tu cuerpo antes de comenzar el proceso de pérdida de grasa."
                },
                {
                  title: "Recetas con Chía para reducir medidas",
                  desc: "Recibe recetas prácticas y fáciles de preparar que aprovechan las propiedades de la chía para aumentar la saciedad, ayudar al control del apetito."
                },
                {
                  title: "Protocolo Completo de 21 Días paso a paso",
                  desc: "Un sistema organizado día por día para acompañarte durante todo el proceso, facilitando la implementación de hábitos sostenibles."
                },
                {
                  title: "Lista de ingredientes y método de preparación",
                  desc: "Todo organizado de forma simple para evitar confusión, ahorrar tiempo y facilitar la preparación diaria de tus comidas, incluso si tienes poco tiempo disponible."
                },
                {
                  title: "App Exclusiva con acceso vitalicio",
                  desc: "Accede a tu contenido desde cualquier dispositivo, revisa recetas y protocolos cuando quieras y mantén tus recursos disponibles sin límites de tiempo."
                }
              ].map((item, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#2f5d3a' }} />
                    <span className="font-bold text-gray-800" style={{ fontSize: '14px' }}>{item.title}</span>
                  </div>
                  <div className="pl-8">
                    <p className="text-gray-500 font-medium" style={{ fontSize: '13px', lineHeight: '18px' }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. BLOQUE BONOS */}
          <section className="border-2 border-dashed border-gray-200 px-3 py-6 rounded-3xl space-y-4 bg-[#FAFAFA]">
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "BONUS: 20 Batidos para acelerar resultados",
                  desc: "Opciones rápidas y nutritivas para complementar tu alimentación diaria."
                },
                {
                  title: "BONUS: 20 Desayunos rápidos y saludables",
                  desc: "Ideas prácticas para comenzar el día con comidas más equilibradas."
                },
                {
                  title: "BONUS: 20 Postres sin azúcar para eliminar la ansiedad",
                  desc: "Alternativas dulces diseñadas para ayudarte a controlar antojos."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 w-full text-left">
                  <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl shrink-0">
                    🎁
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-bold text-gray-800 block" style={{ fontSize: '14px', lineHeight: '1.1' }}>{item.title}</span>
                    <p className="text-gray-500 font-medium mt-0.5" style={{ fontSize: '12.5px', lineHeight: '1.2' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7, 8, 9. BLOQUE OFERTA CONSOLIDADO */}
          <section className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-4 sm:p-6 space-y-4">
            {/* Imagen del Producto */}
            <div className="flex justify-center">
              <div className="relative group w-full max-w-sm">
                <img 
                  src="https://i.imgur.com/x372yOV.png" 
                  alt="Product Protocol App Mockup" 
                  className="w-full rounded-2xl shadow-xl transition-transform group-hover:scale-[1.01] duration-300"
                />
              </div>
            </div>

            {/* Bloque Precio */}
            <div className="text-center space-y-1">
              <p className="text-gray-400 line-through text-sm">Valor real: $27</p>
              <p className="text-gray-600 font-bold text-xs">HOY SOLO A</p>
              <div className="relative inline-block">
                <span className="text-5xl sm:text-6xl font-extrabold" style={{ color: '#eb5e76' }}>$4.99</span>
                <div className="absolute -top-2 -right-10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-bounce" style={{ backgroundColor: '#2f5d3a' }}>
                  OFERTA
                </div>
              </div>
              <p className="text-gray-500 text-[11px] italic pt-2">Menos de lo que gastas en una salida a comer</p>
            </div>

            {/* CTA Principal */}
            <div className="px-0">
              {ctaButton}
            </div>
          </section>

          {/* 10. BLOQUE GARANTÍA */}
          <section className="bg-[#F5F5F5] p-6 rounded-3xl text-center space-y-3">
            <ShieldCheck className="w-10 h-10 text-gray-400 mx-auto" />
            <h4 className="font-bold text-gray-800">Garantía de devolución del dinero</h4>
            <p className="text-sm font-semibold text-gray-600 leading-relaxed px-4">
              7 días de garantía total - Si no te gusta, recuperas el 100% de tu dinero
            </p>
          </section>

          {/* 11. CTA REPETIDO */}
          <div className="px-0">
            {ctaButton}
          </div>

          {/* 12. BLOQUE FAQ */}
          <section className="space-y-4">
            <h3 className="font-bold text-center flex items-center justify-center gap-2" style={{ fontSize: '18px' }}>
              ❓ Preguntas frecuentes
            </h3>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <span className="pr-4" style={{ fontSize: '13px' }}>{item.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed text-sm">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* 13. CTA FINAL */}
          <div className="px-0 pt-6">
            <a
               href="https://pay.hotmart.com/C105635039U?checkoutMode=10"
               target="_blank"
               rel="noopener noreferrer"
            >
              <button className="w-full text-white py-6 px-4 rounded-full font-black flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-[#2f5d3a]/20 group whitespace-nowrap" style={{ backgroundColor: '#2f5d3a', fontSize: '18px' }}>
                QUIERO EMPEZAR 🥰
                <ArrowRight className="w-7 h-7" />
              </button>
            </a>
            <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Pago 100% seguro y encriptado
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
