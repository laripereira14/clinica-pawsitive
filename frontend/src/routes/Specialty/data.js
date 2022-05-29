export const specialties = [
    {
        id: 1,
        name: 'Consultas',
        description: {
            main: 'A Pawsitive conta com uma extensa gama de profissionais de diversas áreas, altamente qualificados e capacitados a fazer um atendimento minucioso onde, juntamente com exames disponíveis, é possível chegar a um diagnóstico mais preciso e fazer um tratamento adequado. Visando o melhor atendimento ao seu animal, nossos veterinários clínicos atendem com hora marcada. Isso proporciona maior comodidade aos nossos clientes e diminuição do estresse dos animais que poderiam esperar na recepção por muito tempo.',
            callout: 'Atendemos as seguintes áreas:',
            features: ['Endocrinologia', 'Cardiologia', 'Oncologia', 'Dermatologia', 'Nefrologia e Urologia', 'Oftalmologia', 'Nutrição']
        },
        photo: 'specialty-1.png'
    },
    {
        id: 2,
        name: 'Exames',
        description: {
            main: 'Na Pawsitive você encontra exames laboratoriais e de imagem de qualidade, realizados por profissionais altamente qualificados, que irão proporcionar ao seu pet conforto do início ao fim. A clínica dispõe laboratório próprio, o que possibilita agilidade na liberação dos resultados, pois as amostras são processadas imediatamente após a coleta, possibilitando a conclusão do diagnóstico e início de tratamento. O Laboratório de Patologia Clínica da Pawsitive é especialmente preparado para oferecer análises clínicas de rotina, contando com uma infraestrutura e equipe técnica que viabilizam o fornecimento de serviços diferenciados, além de baixo período de espera e com altíssimo padrão de qualidade.',
            callout: 'Exames disponíveis:',
            features: ['Hemograma completo', 'Mielograma', 'Pesquisa de hemocitozoários', 'Urinálise', 'Coproparasitológico']
        },
        photo: 'specialty-2.png'
        
    },
    {
        id: 3,
        name: 'Emergência 24hrs',
        description: {
            main: 'Emergências não têm hora para ocorrer, e por isso, a Pawsitive possui assistência de 24 horas por dia, 7 dias por semana na área de clínica geral, pronta para atender o seu pet em qualquer urgência que ele possa ter. Oferecemos tratamento intensivo, onde o animal tem acesso a todos os recursos necessários para a completa estabilização de seu estado de saúde. Para isso, contamos com uma equipe de profissionais altamente qualificados e estrutura para acomodar nossos pacientes peludinhos de acordo com suas necessidades, visando a melhor recuperação possível.'
        },
        photo: 'specialty-3.png'
    },
    {
        id: 4,
        name: 'Vacinas',
        description: {
            main: 'As vacinas têm como função induzir o organismo a produzir sua própria defesa e garantir que o sistema imunológico esteja preparado para combater doenças. Sabendo que nossos melhores amigos estão, diariamente, expostos aos mais diversos tipos de patologias, a Pawsitive conta com as principais vacinas disponíveis o ano todo para garantir que seu pet estará protegido de todas as formas.',
            callout: 'Vacinas oferecidas na Pawsitive:',
            features: ['Raiva', 'Gripe Canina', 'Leishmaniose', 'V5 Felina', 'V10 Canina', 'Giardíase', 'Hepatite Infecciosa Canina']
        },
        photo: 'specialty-4.png'
    },
    {
        id: 5,
        name: 'Banho e Tosa',
        description: {
            main: 'A higiene é fundamental para a manutenção da saúde e bem-estar de nossos amigos de estimação. Assim como nós, eles também precisam ter hábitos de higiene regulares, mas sabemos que nem sempre é possível dar um banho completo ou tosar em casa. Por isso, a Pawsitive oferece o serviço de banho e tosa, onde seu pet será tratado por uma equipe treinada em um espaço cuidadosamente arrumado para garantir segurança e utilizará produtos de qualidade e específicos para sua espécie. Além disso, também terão suas unhas cortadas e sairão limpos e cheirosos, prontos para mais aventuras!'
        },
        photo: 'specialty-5.png'
    },
    {
        id: 6,
        name: 'Internação',
        description: {
            main: 'Seja por uma emergência ou uma cirurgia marcada, a Pawsitive está pronta para oferecer ao seu pet uma internação clínica de altíssima qualidade, com equipe profissional disponível 24h e treinada exclusivamente para tratar casos de internação. Juntamente com as demais especialidades oferecidas pela Pawsitive, a internação clínica é conduzida de forma humanizada, com ambiente controlado e confortável para que o animal não se estresse e possa se recuperar da melhor forma. Isso inclui atividades de lazer, nutrição adequada, visitas, entre outras medidas que possam aproximar a clínica do lar do seu bichinho por quanto tempo for necessário.',
            callout: 'Contamos também com UTI para casos críticos, onde o monitoramento do estado de saúde do seu pet será ainda mais individualizado e minucioso.'
        },
        photo: 'specialty-6.png'
    },



];

export const getSpecialty = (specialtyId) => specialties.find(s => s.id === specialtyId);
