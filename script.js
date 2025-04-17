console.log('Script cargado correctamente');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    const form = document.getElementById('contact-form');
    const languageSelect = document.getElementById('languageSelect');
    
    // Verificar que se encontró el elemento
    if (!languageSelect) {
        console.error('No se encontró el selector de idiomas');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Recoger los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        
        // Aquí puedes agregar la URL de tu grupo de WhatsApp
        const whatsappURL = 'https://chat.whatsapp.com/DcqqRNGsulU7YxtWow1UiJ';
        
        // Redirigir al usuario al grupo de WhatsApp
        window.location.href = whatsappURL;
    });

    // Manejador del selector de idiomas
    const translations = {
        'es': {
            'title': '¡Domina el Español con un Profesor Nativo!',
            'subtitle': 'Curso personalizado para alcanzar la fluidez que necesitas',
            'learn-heading': 'Aprende Español de manera efectiva y en poco tiempo',
            'learn-subtitle': 'Hablar español ahora es más fácil y sin presiones.',
            'benefit-1': 'Clases personalizadas y grupales.',
            'benefit-2': 'Material didáctico exclusivo.',
            'benefit-3': 'Práctica conversacional intensiva.',
            'form-name': 'Tu nombre completo',
            'form-phone': 'Tu teléfono',
            'form-email': 'Tu correo electrónico',
            'form-button': 'Únete a nuestra comunidad de WhatsApp',
            'carousel-title': 'Descubre América Latina',
            'carousel-text': 'Imagina recorrer estos destinos mágicos hablando español con fluidez. Conecta con la gente local, descubre secretos culturales y vive experiencias auténticas que solo el dominio del idioma te puede brindar.',
            'carousel-img1': 'Machu Picchu, Perú',
            'carousel-img2': 'Buenos Aires, Argentina',
            'carousel-img3': 'Ciudad de México, México',
            'carousel-img4': 'Cartagena, Colombia',
            'methodology-title': 'Metodología Efectiva',
            'methodology-text': 'Aprende con un método comunicativo que combina teoría y práctica. Desarrollarás habilidades reales para comunicarte con confianza en cualquier situación.',
            'flexibility-title': 'Flexibilidad Total',
            'flexibility-text': 'Adapta tu aprendizaje a tu ritmo de vida. Horarios flexibles, clases online y contenido disponible 24/7 para que estudies cuando mejor te convenga.',
            'progress-title': 'Seguimiento',
            'progress-text': 'Realizarás evaluaciones continuas para progresar en tu estudio, además de participar en una comunidad que compartirá sus experiencias de aprendizaje.',
            'certification-title': 'Certificación',
            'certification-text': 'Recibirás una sólida preparación en caso de que desees presentar los exámenes de certificación, tales como: SIELE, DELE, CEA.',
            'about-title': 'Sobre mí',
            'about-text': '¡Hola! Soy Carlos Reges, profesor titulado en Lengua Española y Literatura con más de 15 años de experiencia docente. Mi pasión es compartir el idioma español a través de una metodología dinámica que incluye ejercicios prácticos, conversaciones interactivas y actividades culturales diseñadas específicamente para optimizar tu proceso de aprendizaje. Mi enfoque personalizado te ayudará a desarrollar fluidez y confianza en el uso del español.',
            'participate-button': 'Quiero participar en el curso',
            'countdown-heading': 'Próxima clase comienza en:',
            'days-label': 'Días',
            'hours-label': 'Horas',
            'minutes-label': 'Minutos',
            'seconds-label': 'Segundos'
        },
        'en': {
            'title': 'Master Spanish with a Native Teacher!',
            'subtitle': 'Personalized course to achieve the fluency you need',
            'learn-heading': 'Learn Spanish effectively with a personalized approach',
            'learn-subtitle': 'Discover a unique method combining conversation, culture, and real practice',
            'benefit-1': 'Personalized classes adapted to your level and specific goals',
            'benefit-2': 'Exclusive teaching materials and interactive multimedia resources',
            'benefit-3': 'Intensive conversational practice with real-life situations',
            'benefit-4': 'Complete cultural immersion in the Spanish-speaking world',
            'form-name': 'Your full name',
            'form-phone': 'Your phone number',
            'form-email': 'Your email',
            'form-button': 'Join our WhatsApp community',
            'carousel-title': 'Discover Latin America',
            'carousel-text': 'Imagine exploring these magical destinations while speaking Spanish fluently. Connect with locals, uncover cultural secrets, and live authentic experiences that only language mastery can provide.',
            'carousel-img1': 'Machu Picchu, Peru',
            'carousel-img2': 'Buenos Aires, Argentina',
            'carousel-img3': 'Mexico City, Mexico',
            'carousel-img4': 'Cartagena, Colombia',
            'methodology-title': 'Effective Methodology',
            'methodology-text': 'Learn with a communicative method that combines theory and practice. You\'ll develop real skills to communicate confidently in any situation.',
            'flexibility-title': 'Total Flexibility in your Learning',
            'flexibility-text': 'Adapt your learning to your lifestyle. Flexible schedules, online classes, and 24/7 available content so you can study when it suits you best.',
            'progress-title': 'Personalized Monitoring',
            'progress-text': 'You will take continuous assessments to progress in your studies, and participate in a community that will share their experiences.',
            'certification-title': 'Prepare your Certification',
            'certification-text': 'You will receive a solid preparation in listening and speaking if you want to take certification exams, like: SIELE, DELE, CEA.',
            'about-title': 'About me',
            'about-text': 'Hello! I\'m Carlos Reges, a certified Spanish Language and Literature teacher with over 15 years of teaching experience. My passion is sharing the Spanish language through a dynamic methodology that includes practical exercises, interactive conversations, and cultural activities specifically designed to optimize your learning process. My personalized approach will help you develop fluency and confidence in using Spanish.',
            'participate-button': 'I want to join the course',
            'countdown-heading': 'Next class starts in:',
            'days-label': 'Days',
            'hours-label': 'Hours',
            'minutes-label': 'Minutes',
            'seconds-label': 'Seconds'
        },
        'pt': {
            'title': 'Domine o Espanhol com um Professor Nativo!',
            'subtitle': 'Curso personalizado para alcançar a fluência que você precisa',
            'learn-heading': 'Aprenda Espanhol de forma eficaz e personalizada',
            'learn-subtitle': 'Descubra um método único que combina conversação, cultura e prática real',
            'benefit-1': 'Aulas personalizadas adaptadas ao seu nível e objetivos específicos',
            'benefit-2': 'Material didático exclusivo e recursos multimídia interativos',
            'benefit-3': 'Prática intensiva de conversação com situações reais',
            'benefit-4': 'Imersão cultural completa no mundo hispânico',
            'form-name': 'Seu nome completo',
            'form-phone': 'Seu telefone',
            'form-email': 'Seu e-mail',
            'form-button': 'Junte-se à nossa comunidade no WhatsApp',
            'carousel-title': 'Descubra a América Latina',
            'carousel-text': 'Imagine explorar estes destinos mágicos falando espanhol com fluência. Conecte-se com os locais, descubra segredos culturais e viva experiências autênticas que só o domínio do idioma pode proporcionar.',
            'carousel-img1': 'Machu Picchu, Peru',
            'carousel-img2': 'Buenos Aires, Argentina',
            'carousel-img3': 'Cidade do México, México',
            'carousel-img4': 'Cartagena, Colômbia',
            'methodology-title': 'Metodologia Eficaz',
            'methodology-text': 'Aprenda com um método comunicativo que combina teoria e prática. Você desenvolverá habilidades reais para se comunicar com confiança em qualquer situação.',
            'flexibility-title': 'Flexibilidade Total',
            'flexibility-text': 'Adapte seu aprendizado ao seu ritmo de vida. Horários flexíveis, aulas online e conteúdo disponível 24/7 para você estudar quando for melhor.',
            'progress-title': 'Acompanhamento',
            'progress-text': 'Você realizará avaliações contínuas para progredir em seus estudos, além de participar de uma comunidade que compartilhará suas experiências de aprendizado.',
            'certification-title': 'Certificação',
            'certification-text': 'Você receberá uma preparação sólida se desejar fazer os exames de certificação: SIELE, DELE, CEA.',
            'about-title': 'Sobre mim',
            'about-text': 'Olá! Sou Carlos Reges, professor certificado em Língua Espanhola e Literatura com mais de 15 anos de experiência em ensino. Minha paixão é compartilhar o idioma espanhol através de uma metodologia dinâmica que inclui exercícios práticos, conversas interativas e atividades culturais especificamente projetadas para otimizar seu processo de aprendizagem. Minha abordagem personalizada ajudará você a desenvolver fluência e confiança no uso do espanhol.',
            'participate-button': 'Quero participar do curso',
            'countdown-heading': 'Próxima aula começa em:',
            'days-label': 'Dias',
            'hours-label': 'Horas',
            'minutes-label': 'Minutos',
            'seconds-label': 'Segundos'
        }
    };

    // Función para actualizar el contenido
    function updateContent(language) {
        console.log('Cambiando idioma a:', language); // Para debugging

        // Actualizar textos del header
        document.querySelector('.header-promo h1').textContent = translations[language].title;
        document.querySelector('.header-promo p').textContent = translations[language].subtitle;
        
        // Actualizar sección de aprendizaje
        document.querySelector('.offer-column h2').textContent = translations[language]['learn-heading'];
        document.querySelector('.offer-column > p').textContent = translations[language]['learn-subtitle'];
        
        // Actualizar beneficios
        const benefits = document.querySelectorAll('.benefits li');
        benefits[0].textContent = translations[language]['benefit-1'];
        benefits[1].textContent = translations[language]['benefit-2'];
        benefits[2].textContent = translations[language]['benefit-3'];
        
        // Actualizar formulario
        document.getElementById('nombre').placeholder = translations[language]['form-name'];
        document.getElementById('telefono').placeholder = translations[language]['form-phone'];
        document.getElementById('email').placeholder = translations[language]['form-email'];
        document.querySelector('button[type="submit"]').textContent = translations[language]['form-button'];
        
        // Actualizar carrusel
        document.querySelector('.carousel-section h2').textContent = translations[language]['carousel-title'];
        document.querySelector('.carousel-section p').textContent = translations[language]['carousel-text'];
        
        // Actualizar características
        const features = document.querySelectorAll('.feature');
        features[0].querySelector('h3').textContent = translations[language]['methodology-title'];
        features[0].querySelector('p').textContent = translations[language]['methodology-text'];
        features[1].querySelector('h3').textContent = translations[language]['flexibility-title'];
        features[1].querySelector('p').textContent = translations[language]['flexibility-text'];
        features[2].querySelector('h3').textContent = translations[language]['progress-title'];
        features[2].querySelector('p').textContent = translations[language]['progress-text'];
        features[3].querySelector('h3').textContent = translations[language]['certification-title'];
        features[3].querySelector('p').textContent = translations[language]['certification-text'];
        
        // Actualizar sección sobre el profesor
        document.querySelector('.bio-column h2').textContent = translations[language]['about-title'];
        document.querySelector('.bio-column p').textContent = translations[language]['about-text'];
        
        // Actualizar botón de participación
        document.getElementById('participateButton').textContent = translations[language]['participate-button'];
        
        // Actualizar textos del contador
        document.querySelector('.countdown-section h3').textContent = translations[language]['countdown-heading'];
        
        // Actualizar las etiquetas del contador
        const countdownLabels = document.querySelectorAll('.countdown-label');
        countdownLabels.forEach(label => {
            const key = label.getAttribute('data-translate');
            if (translations[language][key]) {
                label.textContent = translations[language][key];
            }
        });
    }

    // Inicializar el contenido con el idioma seleccionado
    const initialLanguage = languageSelect.value;
    updateContent(initialLanguage);

    // Evento para cambios en el selector
    languageSelect.addEventListener('change', function(e) {
        const selectedLanguage = e.target.value;
        console.log('Idioma seleccionado:', selectedLanguage); // Para debugging
        updateContent(selectedLanguage);
    });

    // Agregar el manejador para el botón de participación
    document.getElementById('participateButton').addEventListener('click', function() {
        const formSection = document.querySelector('.hero-section');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Carrusel functionality
    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        let currentIndex = 0;

        function updateSlidePosition() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });

        // Auto-play con más tiempo (10 segundos en lugar de 5)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        }, 10000);  // Cambiado de 5000 a 10000 milisegundos
    }

    // Inicializar el carrusel cuando el DOM esté listo
    initCarousel();

    // Contador
    function initCountdown() {
        // Establecer la fecha y hora específica para el inicio de la clase
        // Formato: Año, Mes (0-11), Día, Hora (0-23), Minutos, Segundos
        const targetDate = new Date(2025, 1, 3, 19, 0, 0); // Ejemplo: 25 de marzo 2024, 7:00 PM
        
        function updateCountdown() {
            const currentDate = new Date();
            const difference = targetDate - currentDate;

            // Si la fecha objetivo ya pasó, puedes establecer una nueva fecha
            if (difference < 0) {
                // Agregar 7 días a la fecha actual para la próxima clase
                targetDate.setDate(targetDate.getDate() + 7);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        // Actualizar cada segundo
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Actualización inicial
    }

    // Inicializar el contador cuando el DOM esté listo
    initCountdown();
});
