import { PmbokData } from './types';

export const pmbokData: PmbokData = {
  principles: [
    {
      id: 'p1', title: { en: 'Stewardship', fa: 'مباشرت' }, icon: '🤝',
      proseSummary: {
        en: `Stewardship is the principle of acting with diligence, care, and trustworthiness to responsibly manage the resources and commitments of a project. This goes beyond simple management; it implies a deeper sense of responsibility for the project's impact, both in the short and long term. A steward understands that they are entrusted with resources that belong to the organization, stakeholders, and sometimes society at large. This principle emphasizes upholding ethical values, such as honesty and fairness, in all decisions and actions.

The scope of stewardship is broad, encompassing internal and external responsibilities. Internally, a steward is committed to achieving the organization's strategic goals, using resources efficiently, and ensuring the project delivers its intended value. Externally, stewardship involves considering the project's impact on society, the environment, and the broader economy. It means making sustainable choices and acting as a responsible corporate citizen.

Ultimately, building and maintaining trust is the cornerstone of stewardship. By demonstrating integrity, transparency in communication, and a genuine concern for the well-being of the team and stakeholders, a steward creates an environment where people feel secure and respected. This trust allows for smoother collaboration, better decision-making, and a stronger alignment toward common goals, leading to more successful and sustainable project outcomes.`,
        fa: `مباشرت، اصل عمل کردن با جدیت، مراقبت و امانتداری برای مدیریت مسئولانه منابع و تعهدات یک پروژه است. این مفهوم فراتر از مدیریت ساده است؛ این به معنای حس عمیق‌تری از مسئولیت در قبال تأثیر پروژه، چه در کوتاه‌مدت و چه در بلندمدت است. یک مباشر درک می‌کند که منابعی به او سپرده شده که متعلق به سازمان، ذینفعان و گاهی جامعه بزرگتر است. این اصل بر حفظ ارزش‌های اخلاقی مانند صداقت و انصاف در تمام تصمیمات و اقدامات تأکید دارد.

دامنه مباشرت گسترده است و مسئولیت‌های داخلی و خارجی را در بر می‌گیرد. در داخل، یک مباشر به دستیابی به اهداف استراتژیک سازمان، استفاده کارآمد از منابع و اطمینان از اینکه پروژه ارزش مورد نظر خود را ارائه می‌دهد، متعهد است. در خارج، مباشرت شامل در نظر گرفتن تأثیر پروژه بر جامعه، محیط زیست و اقتصاد گسترده‌تر است. این به معنای انتخاب‌های پایدار و عمل کردن به عنوان یک شهروند سازمانی مسئول است.

در نهایت، ایجاد و حفظ اعتماد سنگ بنای مباشرت است. با نشان دادن یکپارچگی، شفافیت در ارتباطات و نگرانی واقعی برای رفاه تیم و ذینفعان، یک مباشر محیطی را ایجاد می‌کند که در آن افراد احساس امنیت و احترام می‌کنند. این اعتماد امکان همکاری روان‌تر، تصمیم‌گیری بهتر و همسویی قوی‌تر به سمت اهداف مشترک را فراهم می‌کند و منجر به نتایج پروژه موفق‌تر و پایدارتر می‌شود.`
      },
      summary: [
        { en: 'Be a diligent, respectful, and caring steward.', fa: 'یک مباشر دلسوز، محترم و مراقب باشید.' },
        { en: 'Stewardship entails the responsibility to manage and care for resources entrusted to the project team by society, the organization, or stakeholders.', fa: 'مباشرت شامل مسئولیت‌پذیری برای مدیریت و مراقبت از منابعی است که جامعه، سازمان یا ذینفعان به تیم پروژه سپرده‌اند.'},
        { en: 'This responsibility applies both within the organization (e.g., commitment to organizational goals) and outside it (e.g., social and environmental sustainability).', fa: 'این مسئولیت‌پذیری هم در داخل سازمان (مثلاً تعهد به اهداف سازمانی) و هم در خارج از آن (مثلاً پایداری اجتماعی و زیست‌محیطی) معنا پیدا می‌کند.'},
        { en: 'Stewards adhere to values and ethical principles and build trust.', fa: 'مباشران به ارزش‌ها و اصول اخلاقی پایبند هستند و اعتماد ایجاد می‌کنند.' }
      ],
      questions: [
        {
          question: { en: 'Which option best defines "stewardship" in project management?', fa: 'کدام گزینه بهترین تعریف از "مباشرت" در مدیریت پروژه است؟' },
          options: [
            { en: 'Strictly controlling project costs', fa: 'کنترل دقیق هزینه‌های پروژه' },
            { en: 'Responsibly caring for resources and commitments', fa: 'مراقبت مسئولانه از منابع و تعهدات' },
            { en: 'Executing orders from senior management', fa: 'اجرای دستورات مدیر ارشد' },
            { en: 'Completing the project as quickly as possible', fa: 'تکمیل پروژه در سریع‌ترین زمان ممکن' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Stewardship goes beyond cost control and includes a holistic, responsible approach to caring for all aspects of the project, including financial, human, environmental, and ethical resources, in line with commitments to stakeholders.', fa: 'مباشرت فراتر از کنترل هزینه است و شامل یک رویکرد جامع و مسئولانه برای مراقبت از تمام جنبه‌های پروژه، از جمله منابع مالی، انسانی، محیطی و اخلاقی، در راستای تعهدات به ذینفعان است.' }
        },
        {
          question: { en: 'Stewardship addresses which of the following?', fa: 'مباشرت به کدام یک از موارد زیر توجه دارد؟' },
          options: [
            { en: 'Only the financial aspects of the project', fa: 'فقط مسائل مالی پروژه' },
            { en: 'Only customer satisfaction', fa: 'فقط رضایت مشتری' },
            { en: 'Internal and external organizational issues, including ethics and sustainability', fa: 'مسائل داخلی و خارجی سازمان، شامل اخلاق و پایداری' },
            { en: 'Only the project schedule', fa: 'فقط زمان‌بندی پروژه' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Stewardship has a holistic view that considers both internal organizational commitments like goals and policies, and the external impacts of the project on society and the environment.', fa: 'مباشرت یک دیدگاه کل‌نگر دارد که هم به تعهدات داخلی سازمان مانند اهداف و سیاست‌ها و هم به تأثیرات خارجی پروژه بر جامعه و محیط زیست توجه می‌کند.' }
        },
        {
          question: { en: 'What qualities should an effective steward possess?', fa: 'یک مباشر موثر باید چه ویژگی داشته باشد؟' },
          options: [
            { en: 'Decisiveness without consultation', fa: 'قاطعیت در تصمیم‌گیری بدون مشورت' },
            { en: 'Diligence, respect, and responsibility', fa: 'دلسوزی، احترام و مسئولیت‌پذیری' },
            { en: 'Focus solely on technical aspects', fa: 'تمرکز صرف بر جنبه‌های فنی' },
            { en: 'Ignoring stakeholder concerns', fa: 'نادیده گرفتن نگرانی‌های ذینفعان' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Key qualities of a steward include diligence for people, respect for different viewpoints, and responsibility for resources and outcomes.', fa: 'ویژگی‌های کلیدی یک مباشر شامل دلسوزی برای افراد، احترام به دیدگاه‌های مختلف و مسئولیت‌پذیری در قبال منابع و نتایج است.' }
        }
      ]
    },
    {
      id: 'p2', title: { en: 'Team', fa: 'تیم' }, icon: '👥',
      proseSummary: {
        en: `The 'Team' principle emphasizes that projects are delivered by people working together. A collaborative and high-performing project team is the engine of project success. This principle focuses on creating an environment where individuals with diverse skills, knowledge, and experiences can work together effectively towards a common goal. It's about fostering a culture of mutual respect, trust, and shared ownership.

Building such a team involves several key activities. It starts with defining clear roles and responsibilities so that everyone understands their contribution. Empowering team members by giving them autonomy and authority over their work increases motivation and accountability. Open and honest communication is vital for sharing ideas, resolving conflicts constructively, and ensuring everyone is aligned.

Effective leadership, particularly servant leadership, plays a crucial role. A servant leader focuses on the needs of the team, removes impediments, and provides the resources and support necessary for them to succeed. This approach helps the team grow, learn from its experiences, and ultimately reach its full potential, transforming a group of individuals into a cohesive and powerful unit.`,
        fa: `اصل 'تیم' تأکید می‌کند که پروژه‌ها توسط افرادی که با هم کار می‌کنند، تحویل داده می‌شوند. یک تیم پروژه مشارکتی و با عملکرد بالا، موتور موفقیت پروژه است. این اصل بر ایجاد محیطی تمرکز دارد که در آن افراد با مهارت‌ها، دانش و تجربیات متنوع بتوانند به طور مؤثر برای رسیدن به یک هدف مشترک با هم کار کنند. این به معنای پرورش فرهنگ احترام متقابل، اعتماد و مالکیت مشترک است.

ساختن چنین تیمی شامل چندین فعالیت کلیدی است. این کار با تعریف نقش‌ها و مسئولیت‌های روشن آغاز می‌شود تا همه سهم خود را درک کنند. توانمندسازی اعضای تیم با دادن استقلال و اختیار بر کارشان، انگیزه و مسئولیت‌پذیری را افزایش می‌دهد. ارتباطات باز و صادقانه برای به اشتراک گذاشتن ایده‌ها، حل سازنده تعارضات و اطمینان از همسویی همه، حیاتی است.

رهبری مؤثر، به ویژه رهبری خدمتگزار، نقش مهمی ایفا می‌کند. یک رهبر خدمتگزار بر نیازهای تیم تمرکز می‌کند، موانع را برطرف می‌سازد و منابع و پشتیبانی لازم برای موفقیت آنها را فراهم می‌کند. این رویکرد به تیم کمک می‌کند تا رشد کند، از تجربیات خود بیاموزد و در نهایت به پتانسیل کامل خود دست یابد و گروهی از افراد را به یک واحد منسجم و قدرتمند تبدیل کند.`
      },
      summary: [
          {en: 'Create a collaborative project team environment.', fa: 'یک محیط مشارکتی برای تیم پروژه ایجاد کنید.'},
          {en: 'Project teams are composed of individuals with diverse skills, knowledge, and experience.', fa: 'تیم‌های پروژه از افرادی با مهارت‌ها، دانش و تجربیات گوناگون تشکیل شده‌اند.'},
          {en: 'Successful teams foster a culture of shared ownership, trust, and collaboration.', fa: 'تیم‌های موفق، فرهنگ مالکیت مشترک، اعتماد و همکاری را ترویج می‌ده دهند.'},
          {en: 'Servant leadership helps the team overcome obstacles and reach their full potential.', fa: 'رهبری خدمتگزار به تیم کمک می‌کند تا موانع را برطرف کرده و به پتانسیل کامل خود دست یابند.'}
      ],
      questions: [
        {
          question: {en: 'What is the key element for a successful project team?', fa: 'عنصر کلیدی برای یک تیم پروژه موفق چیست؟'},
          options: [
            {en: 'Intense competition among members', fa: 'رقابت شدید بین اعضا'},
            {en: 'An individual and independent work environment', fa: 'محیط کاری فردی و مستقل'},
            {en: 'A culture of collaboration and shared ownership', fa: 'فرهنگ همکاری و مالکیت مشترک'},
            {en: 'Centralized decision-making by the project manager', fa: 'تصمیم‌گیری متمرکز توسط مدیر پروژه'}
          ],
          correctAnswer: 2,
          explanation: {en: 'A successful team is built on the foundation of collaboration, mutual trust, and a sense of shared ownership of the project goals.', fa: 'یک تیم موفق بر پایه همکاری، اعتماد متقابل و احساس مالکیت مشترک نسبت به اهداف پروژه ساخته می‌شود.'}
        },
        {
          question: {en: 'Which leadership style is recommended for strengthening a project team?', fa: 'کدام سبک رهبری برای تقویت تیم پروژه توصیه می‌شود؟'},
          options: [
            {en: 'Authoritative leadership', fa: 'رهبری دستوری'},
            {en: 'Servant leadership', fa: 'رهبری خدمتگزار'},
            {en: 'Bureaucratic leadership', fa: 'رهبری بوروکراتیک'},
            {en: 'Laissez-faire leadership', fa: 'رهبری بی‌تفاوت'}
          ],
          correctAnswer: 1,
          explanation: {en: 'Servant leadership focuses on empowering the team, removing obstacles, and providing the necessary resources for their success.', fa: 'رهبری خدمتگزار بر توانمندسازی تیم، حذف موانع و فراهم کردن منابع مورد نیاز برای موفقیت آنها تمرکز دارد.'}
        },
        {
          question: {en: 'What is the main advantage of a diverse project team?', fa: 'مزیت اصلی یک تیم پروژه متنوع چیست؟'},
          options: [
            {en: 'Cost reduction', fa: 'کاهش هزینه‌ها'},
            {en: 'Increased work speed', fa: 'افزایش سرعت کار'},
            {en: 'Increased creativity and better problem-solving', fa: 'افزایش خلاقیت و حل مسئله بهتر'},
            {en: 'Reduced need for communication', fa: 'کاهش نیاز به ارتباطات'}
          ],
          correctAnswer: 2,
          explanation: {en: 'Diversity in skills, experiences, and perspectives leads to innovative ideas and more comprehensive solutions to complex problems.', fa: 'تنوع در مهارت‌ها، تجربیات و دیدگاه‌ها منجر به ایده‌های نوآورانه و راه‌حل‌های جامع‌تر برای مسائل پیچیده می‌شود.'}
        }
      ]
    },
    {
        id: 'p3', title: { en: 'Stakeholders', fa: 'ذینفعان' }, icon: '🎯',
        proseSummary: {
          en: `Stakeholders are any individuals, groups, or organizations that can affect, be affected by, or perceive themselves to be affected by a project. This principle underscores the critical importance of proactively identifying and engaging with all stakeholders throughout the project lifecycle. Effective engagement is not just about communication; it's about building relationships and aligning expectations to foster support and mitigate potential opposition.

The process begins with stakeholder identification to create a comprehensive list of everyone involved or impacted. Following identification, stakeholder analysis is performed to understand their needs, expectations, interests, and potential influence on the project. This analysis often involves tools like the power/interest grid to prioritize stakeholders and develop tailored engagement strategies. A high-power, high-interest stakeholder requires close management, while a low-power, low-interest stakeholder might only need to be monitored.

Successful stakeholder engagement is a continuous process of consultation and communication. It involves keeping stakeholders informed, managing their expectations, and involving them in decision-making where appropriate. By doing so, the project team can build trust, gain valuable insights, address concerns before they become major issues, and ultimately increase the probability of project success by ensuring the delivered outcome is valuable and acceptable to those it affects.`,
          fa: `ذینفعان هر فرد، گروه یا سازمانی هستند که می‌توانند بر پروژه تأثیر بگذارند، از آن تأثیر بپذیرند یا خود را تحت تأثیر آن بدانند. این اصل بر اهمیت حیاتی شناسایی و تعامل فعالانه با تمام ذینفعان در طول چرخه حیات پروژه تأکید می‌کند. تعامل مؤثر فقط به معنای ارتباطات نیست؛ بلکه به معنای ایجاد روابط و همسوسازی انتظارات برای تقویت حمایت و کاهش مخالفت‌های بالقوه است.

این فرآیند با شناسایی ذینفعان برای ایجاد یک لیست جامع از همه افراد درگیر یا تحت تأثیر، آغاز می‌شود. پس از شناسایی، تحلیل ذینفعان برای درک نیازها، انتظارات، علایق و نفوذ بالقوه آنها بر پروژه انجام می‌شود. این تحلیل اغلب شامل ابزارهایی مانند ماتریس قدرت/علاقه برای اولویت‌بندی ذینفعان و توسعه استراتژی‌های تعامل متناسب است. یک ذینفع با قدرت بالا و علاقه بالا نیازمند مدیریت دقیق است، در حالی که یک ذینفع با قدرت پایین و علاقه پایین ممکن است فقط نیاز به نظارت داشته باشد.

تعامل موفق با ذینفعان یک فرآیند مستمر از مشاوره و ارتباط است. این شامل مطلع نگه داشتن ذینفعان، مدیریت انتظارات آنها و درگیر کردن آنها در تصمیم‌گیری در موارد مقتضی است. با انجام این کار، تیم پروژه می‌تواند اعتماد ایجاد کند، بینش‌های ارزشمندی به دست آورد، نگرانی‌ها را قبل از تبدیل شدن به مسائل بزرگ برطرف کند و در نهایت با اطمینان از اینکه نتیجه تحویل داده شده برای افراد تحت تأثیر، ارزشمند و قابل قبول است، احتمال موفقیت پروژه را افزایش دهد.`
        },
        summary: [
            {en: 'Effectively engage with stakeholders.', fa: 'به‌طور مؤثر با ذینفعان تعامل کنید.'},
            {en: 'Understanding, analyzing, and proactively engaging with stakeholders is vital for project success.', fa: 'درک، تحلیل و تعامل فعال با ذینفعان برای موفقیت پروژه حیاتی است.'},
            {en: 'Identify the needs and expectations of stakeholders and strive to gain their support.', fa: 'نیازها و انتظارات ذینفعان را شناسایی کرده و برای جلب حمایت آنها تلاش کنید.'},
            {en: 'Continuous and transparent communication helps manage expectations.', fa: 'ارتباطات مداوم و شفاف به مدیریت انتظارات کمک می‌کند.'}
        ],
        questions: [
            {
                question: {en: 'Why is stakeholder engagement vital for project success?', fa: 'چرا تعامل با ذینفعان برای موفقیت پروژه حیاتی است؟'},
                options: [
                    {en: 'Just to keep them informed', fa: 'برای اینکه فقط آنها را در جریان بگذاریم'},
                    {en: 'To understand their needs and align the project with their expectations', fa: 'برای درک نیازها و همسو کردن پروژه با انتظارات آنها'},
                    {en: 'Because it is a mandatory process', fa: 'چون یک فرآیند اجباری است'},
                    {en: 'To have complete control over them', fa: 'برای کنترل کردن کامل آنها'}
                ],
                correctAnswer: 1,
                explanation: {en: 'The primary goal of stakeholder engagement is to deeply understand their needs and expectations to ensure that the project outputs create real value for them.', fa: 'هدف اصلی تعامل با ذینفعان، درک عمیق نیازها و انتظارات آنهاست تا اطمینان حاصل شود که خروجی‌های پروژه ارزش واقعی برای آنها ایجاد می‌کند.'}
            },
            {
                question: {en: 'Which of the following is a key activity in stakeholder engagement?', fa: 'کدامیک از فعالیت‌های کلیدی در تعامل با ذینفعان است؟'},
                options: [
                    {en: 'Ignoring negative feedback', fa: 'نادیده گرفتن بازخورد منفی'},
                    {en: 'One-way communication', fa: 'ارتباط یک‌طرفه'},
                    {en: 'Identifying, analyzing, and prioritizing stakeholders', fa: 'شناسایی، تحلیل و اولویت‌بندی ذینفعان'},
                    {en: 'Restricting access to information', fa: 'محدود کردن دسترسی به اطلاعات'}
                ],
                correctAnswer: 2,
                explanation: {en: 'A structured process for stakeholder management begins with identifying them, then analyzing their influence and interest, and finally prioritizing how to engage with them.', fa: 'یک فرآیند ساختاریافته برای مدیریت ذینفعان با شناسایی آنها شروع می‌شود، سپس تحلیل تأثیر و علاقه آنها و در نهایت اولویت‌بندی نحوه تعامل با آنها انجام می‌گیرد.'}
            },
            {
                question: {en: 'What is the best way to manage conflicting stakeholder expectations?', fa: 'بهترین راه برای مدیریت انتظارات متناقض ذینفعان چیست؟'},
                options: [
                    {en: 'Ignoring the conflicts', fa: 'نادیده گرفتن تضادها'},
                    {en: 'Siding with the more powerful stakeholder', fa: 'طرفداری از ذینفع قدرتمندتر'},
                    {en: 'Facilitating communication and finding a common solution', fa: 'تسهیل ارتباط و یافتن راه‌حل مشترک'},
                    {en: 'Unilateral decision-making by the project manager', fa: 'تصمیم‌گیری یکجانبه توسط مدیر پروژه'}
                ],
                correctAnswer: 2,
                explanation: {en: 'An effective project manager should act as a facilitator, helping stakeholders reach a common understanding and solution by creating a constructive dialogue space.', fa: 'یک مدیر پروژه مؤثر باید به عنوان یک تسهیل‌گر عمل کرده و با ایجاد یک فضای گفتگوی سازنده، به ذینفعان کمک کند تا به یک درک و راه‌حل مشترک برسند.'}
            }
        ]
    },
    {
        id: 'p4', title: { en: 'Value', fa: 'ارزش' }, icon: '💎',
        proseSummary: {
          en: `The principle of 'Value' shifts the focus of project management from simply completing tasks and delivering outputs to achieving desired outcomes and benefits. Value is the ultimate measure of project success and is defined by the stakeholders. It represents the net quantifiable and unquantifiable benefits that the project's result provides.

Value can manifest in various forms. It can be tangible, such as increased revenue, reduced costs, or higher market share. It can also be intangible, including improved brand reputation, increased customer satisfaction, or enhanced organizational knowledge. The project team must work closely with stakeholders, especially the business and customers, to clearly understand what constitutes value for them and how it will be measured.

This principle requires a continuous focus on value throughout the project lifecycle. The team should regularly ask, "Is this activity adding value?" and be prepared to adjust plans and priorities to maximize value delivery. In adaptive approaches, this is often done by delivering the highest-value features first. Ultimately, a project is only truly successful if it delivers the expected value and contributes to the organization's strategic objectives.`,
          fa: `اصل 'ارزش' تمرکز مدیریت پروژه را از صرفاً تکمیل وظایف و تحویل خروجی‌ها به دستیابی به نتایج و منافع مطلوب تغییر می‌دهد. ارزش، مقیاس نهایی موفقیت پروژه است و توسط ذینفعان تعریف می‌شود. این نشان‌دهنده منافع خالص قابل سنجش و غیرقابل سنجش است که نتیجه پروژه فراهم می‌کند.

ارزش می‌تواند به اشکال مختلفی ظاهر شود. می‌تواند ملموس باشد، مانند افزایش درآمد، کاهش هزینه‌ها یا سهم بازار بالاتر. همچنین می‌تواند ناملموس باشد، از جمله بهبود شهرت برند، افزایش رضایت مشتری یا ارتقاء دانش سازمانی. تیم پروژه باید از نزدیک با ذینفعان، به ویژه کسب‌وکار و مشتریان، کار کند تا به وضوح درک کند چه چیزی برای آنها ارزش محسوب می‌شود و چگونه اندازه‌گیری خواهد شد.

این اصل نیازمند تمرکز مستمر بر ارزش در طول چرخه حیات پروژه است. تیم باید به طور مرتب بپرسد: "آیا این فعالیت ارزش افزوده دارد؟" و آماده باشد تا برنامه‌ها و اولویت‌ها را برای به حداکثر رساندن تحویل ارزش تنظیم کند. در رویکردهای انطباقی، این کار اغلب با تحویل ویژگی‌های با بالاترین ارزش در ابتدا انجام می‌شود. در نهایت، یک پروژه تنها زمانی واقعاً موفق است که ارزش مورد انتظار را تحویل دهد و به اهداف استراتژیک سازمان کمک کند.`
        },
        summary: [
            {en: 'Focus on creating value.', fa: 'بر خلق ارزش تمرکز کنید.'},
            {en: 'Value is the ultimate indicator of project success.', fa: 'ارزش، شاخص نهایی موفقیت پروژه است.'},
            {en: 'Value can be tangible (financial) or intangible (like brand reputation).', fa: 'ارزش می‌تواند ملموس (مالی) یا ناملموس (مانند شهرت برند) باشد.'},
            {en: 'The project team must continuously ensure that the work aligns with realizing the intended benefits and value.', fa: 'تیم پروژه باید به طور مداوم اطمینان حاصل کند که کارها در راستای تحقق منافع و ارزش مورد نظر است.'}
        ],
        questions: [
            {
                question: {en: 'What is the primary focus of modern project management?', fa: 'تمرکز اصلی مدیریت پروژه مدرن بر چیست؟'},
                options: [
                    {en: 'Adherence to budget', fa: 'پایبندی به بودجه'},
                    {en: 'Fast delivery', fa: 'تحویل سریع'},
                    {en: 'Creating value for stakeholders', fa: 'خلق ارزش برای ذینفعان'},
                    {en: 'Completing all tasks', fa: 'تکمیل تمام وظایف'}
                ],
                correctAnswer: 2,
                explanation: {en: 'While budget and time are important, the ultimate success of a project is measured by the value it creates for the organization and its stakeholders.', fa: 'در حالی که بودجه و زمان مهم هستند، موفقیت نهایی یک پروژه با ارزشی که برای سازمان و ذینفعانش ایجاد می‌کند، سنجیده می‌شود.'}
            },
            {
                question: {en: 'Who defines value in a project?', fa: 'ارزش در پروژه توسط چه کسی تعریف می‌شود؟'},
                options: [
                    {en: 'Project manager', fa: 'مدیر پروژه'},
                    {en: 'Development team', fa: 'تیم توسعه'},
                    {en: 'Stakeholders and the customer', fa: 'ذینفعان و مشتری'},
                    {en: 'Project sponsor', fa: 'اسپانسر پروژه'}
                ],
                correctAnswer: 2,
                explanation: {en: 'Value is defined from the perspective of the stakeholders, especially the customer. The project must meet their needs and wants to be considered valuable.', fa: 'ارزش از دیدگاه ذینفعان، به ویژه مشتری، تعریف می‌شود. پروژه باید نیازها و خواسته‌های آنها را برآورده کند تا ارزشمند تلقی شود.'}
            },
            {
                question: {en: 'Which of the following is an example of intangible value?', fa: 'کدام مورد نمونه‌ای از ارزش ناملموس است؟'},
                options: [
                    {en: 'Cost reduction', fa: 'کاهش هزینه‌ها'},
                    {en: 'Increased market share', fa: 'افزایش سهم بازار'},
                    {en: 'Increased customer satisfaction', fa: 'افزایش رضایت مشتری'},
                    {en: 'Increased revenue', fa: 'افزایش درآمد'}
                ],
                correctAnswer: 2,
                explanation: {en: 'Customer satisfaction, brand reputation, and increased organizational knowledge are examples of intangible values that may not be directly financial but are vital for long-term success.', fa: 'رضایت مشتری، شهرت برند، و افزایش دانش سازمانی نمونه‌هایی از ارزش‌های ناملموس هستند که ممکن است مستقیماً مالی نباشند اما برای موفقیت بلندمدت سازمان حیاتی هستند.'}
            }
        ]
    },
    {
        id: 'p5', title: { en: 'Systems Thinking', fa: 'تفکر سیستمی' }, icon: '⚙️',
        proseSummary: {
          en: `Systems thinking is the principle of viewing a project as a complex, dynamic, and integrated system. Rather than looking at individual components in isolation, it encourages a holistic perspective, understanding that all parts of a project are interconnected and interdependent. A change in one part of the system, such as scope, budget, or team composition, can have unintended ripple effects on other parts.

This principle requires the project team to identify and understand the various elements within the project system (e.g., tasks, resources, stakeholders) and the external systems it interacts with (e.g., market conditions, regulations). By mapping these interactions, the team can better anticipate the consequences of their actions and make more informed decisions. It helps in recognizing feedback loops, where the output of an action can circle back to influence future actions.

Applying systems thinking allows project managers and teams to move beyond simply solving immediate problems. It enables them to identify root causes, see the bigger picture, and design more resilient and effective project strategies. This holistic approach is crucial for managing complexity, navigating uncertainty, and ensuring that the project as a whole delivers its intended value in harmony with its environment.`,
          fa: `تفکر سیستمی، اصل نگریستن به پروژه به عنوان یک سیستم پیچیده، پویا و یکپارچه است. به جای نگاه کردن به اجزای فردی به صورت مجزا، این اصل یک دیدگاه کل‌نگر را تشویق می‌کند و این درک را به وجود می‌آورد که تمام بخش‌های یک پروژه به هم پیوسته و وابسته هستند. تغییر در یک بخش از سیستم، مانند محدوده، بودجه یا ترکیب تیم، می‌تواند تأثیرات موجی ناخواسته بر سایر بخش‌ها داشته باشد.

این اصل از تیم پروژه می‌خواهد تا عناصر مختلف درون سیستم پروژه (مانند وظایف، منابع، ذینفعان) و سیستم‌های خارجی که با آنها در تعامل است (مانند شرایط بازار، قوانین) را شناسایی و درک کند. با ترسیم این تعاملات، تیم می‌تواند پیامدهای اقدامات خود را بهتر پیش‌بینی کرده و تصمیمات آگاهانه‌تری بگیرد. این به شناسایی حلقه‌های بازخورد کمک می‌کند، جایی که خروجی یک عمل می‌تواند به عقب برگردد و بر اقدامات آینده تأثیر بگذارد.

به کارگیری تفکر سیستمی به مدیران پروژه و تیم‌ها اجازه می‌دهد تا از حل صرف مشکلات فوری فراتر بروند. این آنها را قادر می‌سازد تا علل ریشه‌ای را شناسایی کنند، تصویر بزرگتر را ببینند و استراتژی‌های پروژه مقاوم‌تر و مؤثرتری طراحی کنند. این رویکرد کل‌نگر برای مدیریت پیچیدگی، پیمایش در عدم قطعیت و اطمینان از اینکه پروژه به عنوان یک کل، ارزش مورد نظر خود را در هماهنگی با محیطش تحویل می‌دهد، حیاتی است.`
        },
        summary: [
            {en: 'Recognize, evaluate, and respond to system interactions.', fa: 'تعاملات سیستم را بشناسید، ارزیابی کنید و به آنها پاسخ دهید.'},
            {en: 'A project is a complex system composed of interconnected parts.', fa: 'پروژه یک سیستم پیچیده و متشکل از اجزای به هم پیوسته است.'},
            {en: 'A change in one part of the project can affect other parts.', fa: 'تغییر در یک بخش از پروژه می‌تواند بر سایر بخش‌ها تأثیر بگذارد.'},
            {en: 'A holistic view of the project helps in better decision-making.', fa: 'نگاه کل‌نگر به پروژه به تصمیم‌گیری بهتر کمک می‌کند.'}
        ],
        questions: [
            {
                question: {en: 'What does systems thinking mean in project management?', fa: 'تفکر سیستمی در مدیریت پروژه به چه معناست؟'},
                options: [
                    {en: 'Focusing on individual tasks', fa: 'تمرکز بر وظایف فردی'},
                    {en: 'Viewing the project as a collection of independent components', fa: 'دیدن پروژه به عنوان مجموعه‌ای از اجزای مستقل'},
                    {en: 'Understanding the project as an integrated and dynamic system', fa: 'درک پروژه به عنوان یک سیستم یکپارچه و پویا'},
                    {en: 'Ignoring external influences', fa: 'نادیده گرفتن تأثیرات خارجی'}
                ],
                correctAnswer: 2,
                explanation: {en: 'Systems thinking means understanding that a project is a set of interconnected components that interact with each other and their environment and must be viewed as a whole.', fa: 'تفکر سیستمی یعنی درک اینکه پروژه مجموعه‌ای از اجزای به هم پیوسته است که با یکدیگر و با محیط خود در تعامل هستند و باید به صورت یک کل دیده شوند.'}
            },
            {
                question: {en: 'Why is systems thinking important?', fa: 'چرا تفکر سیستمی مهم است؟'},
                options: [
                    {en: 'Because it simplifies tasks', fa: 'چون کارها را ساده‌تر می‌کند'},
                    {en: 'Because it helps identify the unintended consequences of changes', fa: 'چون به شناسایی تأثیرات ناخواسته تغییرات کمک می‌کند'},
                    {en: 'Because it reduces the need for planning', fa: 'چون نیاز به برنامه‌ریزی را کاهش می‌دهد'},
                    {en: 'Because it increases speed', fa: 'چون باعث افزایش سرعت می‌شود'}
                ],
                correctAnswer: 1,
                explanation: {en: 'By understanding the interactions between different components, a project manager can better predict the outcomes of a decision or change and prevent unintended negative consequences.', fa: 'با درک تعاملات بین اجزای مختلف، یک مدیر پروژه می‌تواند پیامدهای یک تصمیم یا تغییر را بهتر پیش‌بینی کرده و از عواقب منفی ناخواسته جلوگیری کند.'}
            },
            {
                question: {en: 'Which of the following is an example of a component in a project system?', fa: 'کدام مورد نمونه‌ای از یک جزء در سیستم پروژه است؟'},
                options: [
                    {en: 'The project team', fa: 'تیم پروژه'},
                    {en: 'Processes', fa: 'فرآیندها'},
                    {en: 'The external environment', fa: 'محیط خارجی'},
                    {en: 'All of the above', fa: 'همه موارد'}
                ],
                correctAnswer: 3,
                explanation: {en: 'A project system includes all internal elements (like team, budget, processes) and external ones (like market, competitors, regulations) that affect or are affected by the project.', fa: 'یک سیستم پروژه شامل تمام عناصر داخلی (مانند تیم، بودجه، فرآیندها) و خارجی (مانند بازار، رقبا، قوانین) است که بر پروژه تأثیر می‌گذارند یا از آن تأثیر می‌پذیرند.'}
            }
        ]
    },
    {
        id: 'p6', title: { en: 'Leadership', fa: 'رهبری' }, icon: '🧑‍💼',
        proseSummary: {
          en: `The principle of Leadership emphasizes that effective leadership is a critical factor in a project's success. It's important to understand that leadership is not synonymous with authority or a specific role like 'project manager'. Instead, leadership is a set of behaviors and actions that anyone on the project team can demonstrate to guide, influence, and motivate others toward achieving the project's vision and goals.

Effective leadership involves creating and communicating a clear and compelling vision for the project, which helps to align and inspire the team. Leaders motivate by creating a positive and empowering environment, recognizing contributions, and helping team members overcome challenges. Key leadership skills include communication, emotional intelligence, critical thinking, and the ability to facilitate collaboration and decision-making.

Leadership styles can and should be adapted to the situation. A directive style might be needed in a crisis, while a servant leadership style, which focuses on empowering the team and removing obstacles, is often highly effective in fostering a collaborative and high-performing environment. Ultimately, fostering leadership at all levels of the project team creates a more resilient, proactive, and successful project.`,
          fa: `اصل رهبری تأکید می‌کند که رهبری مؤثر یک عامل حیاتی در موفقیت پروژه است. مهم است که درک کنیم رهبری مترادف با اختیار یا یک نقش خاص مانند 'مدیر پروژه' نیست. در عوض، رهبری مجموعه‌ای از رفتارها و اقداماتی است که هر کسی در تیم پروژه می‌تواند برای هدایت، نفوذ و انگیزش دیگران به سمت دستیابی به چشم‌انداز و اهداف پروژه، به نمایش بگذارد.

رهبری مؤثر شامل ایجاد و ابلاغ یک چشم‌انداز روشن و قانع‌کننده برای پروژه است که به همسویی و الهام‌بخشی تیم کمک می‌کند. رهبران با ایجاد یک محیط مثبت و توانمندساز، شناختن مشارکت‌ها و کمک به اعضای تیم برای غلبه بر چالش‌ها، انگیزه ایجاد می‌کنند. مهارت‌های کلیدی رهبری شامل ارتباطات، هوش هیجانی، تفکر انتقادی و توانایی تسهیل همکاری و تصمیم‌گیری است.

سبک‌های رهبری می‌توانند و باید با شرایط تطبیق داده شوند. یک سبک دستوری ممکن است در یک بحران مورد نیاز باشد، در حالی که یک سبک رهبری خدمتگزار، که بر توانمندسازی تیم و حذف موانع تمرکز دارد، اغلب در پرورش یک محیط مشارکتی و با عملکرد بالا بسیار مؤثر است. در نهایت، پرورش رهبری در تمام سطوح تیم پروژه، یک پروژه مقاوم‌تر، فعال‌تر و موفق‌تر ایجاد می‌کند.`
        },
        summary: [
            {en: 'Demonstrate leadership behaviors.', fa: 'رفتارهای رهبری را نشان دهید.'},
            {en: 'Leadership is not limited to position or authority; anyone on the team can exhibit it.', fa: 'رهبری به جایگاه یا اختیار محدود نمی‌شود و هر کسی در تیم می‌تواند آن را به نمایش بگذارد.'},
            {en: 'Leaders guide the team towards goals through motivation, guidance, and influence.', fa: 'رهبران با ایجاد انگیزه، راهنمایی و نفوذ، تیم را به سمت اهداف هدایت می‌کنند.'},
            {en: 'Skills like communication, emotional intelligence, and problem-solving are essential for leadership.', fa: 'مهارت‌هایی مانند ارتباطات، هوش هیجانی و حل مسئله برای رهبری ضروری است.'}
        ],
        questions: [
            {
                question: {en: 'What is the main difference between leadership and management?', fa: 'تفاوت اصلی بین رهبری و مدیریت چیست؟'},
                options: [
                    {en: 'They are the same thing', fa: 'هیچ تفاوتی ندارند'},
                    {en: 'Management focuses on control, while leadership focuses on influence and motivation', fa: 'مدیریت بر کنترل و رهبری بر نفوذ و انگیزش تمرکز دارد'},
                    {en: 'Leadership is only performed by senior managers', fa: 'رهبری فقط توسط مدیران ارشد انجام می‌شود'},
                    {en: 'Management is more important than leadership', fa: 'مدیریت مهم‌تر از رهبری است'}
                ],
                correctAnswer: 1,
                explanation: {en: 'Management seeks to maintain order and control processes, while leadership focuses on inspiring, creating a vision, and empowering people to achieve goals.', fa: 'مدیریت به دنبال حفظ نظم و کنترل فرآیندهاست، در حالی که رهبری بر الهام‌بخشی، ایجاد چشم‌انداز و توانمندسازی افراد برای دستیابی به اهداف تمرکز دارد.'}
            },
            {
                question: {en: 'Which behavior is an effective leadership behavior?', fa: 'کدام رفتار، یک رفتار رهبری مؤثر است؟'},
                options: [
                    {en: 'Making decisions individually', fa: 'تصمیم‌گیری انفرادی'},
                    {en: 'Delegating authority and empowering the team', fa: 'تفویض اختیار و توانمندسازی تیم'},
                    {en: 'Micromanaging tasks', fa: 'کنترل دقیق کارهای جزئی'},
                    {en: 'Avoiding risk', fa: 'اجتناب از ریسک'}
                ],
                correctAnswer: 1,
                explanation: {en: 'An effective leader trusts their team, delegates responsibilities, and empowers them to make decisions and take action.', fa: 'یک رهبر مؤثر به تیم خود اعتماد کرده، مسئولیت‌ها را تفویض می‌کند و آنها را برای تصمیم‌گیری و اقدام توانمند می‌سازد.'}
            },
            {
                question: {en: 'Who on the project team can be a leader?', fa: 'چه کسی در تیم پروژه می‌تواند رهبر باشد؟'},
                options: [
                    {en: 'Only the project manager', fa: 'فقط مدیر پروژه'},
                    {en: 'Only the sponsor', fa: 'فقط اسپانسر'},
                    {en: 'Only senior managers', fa: 'فقط مدیران ارشد'},
                    {en: 'Any member of the team', fa: 'هر یک از اعضای تیم'}
                ],
                correctAnswer: 3,
                explanation: {en: 'Leadership is a behavior, not a position. Any team member can demonstrate leadership behaviors by showing initiative, helping colleagues, and advancing goals.', fa: 'رهبری یک رفتار است، نه یک جایگاه. هر عضوی از تیم می‌تواند با نشان دادن ابتکار، کمک به همکاران و پیشبرد اهداف، رفتارهای رهبری از خود نشان دهد.'}
            }
        ]
    },
    {
        id: 'p7', title: { en: 'Tailoring', fa: 'متناسب‌سازی' }, icon: '✂️',
        proseSummary: {
          en: `The principle of Tailoring recognizes that every project is unique and that there is no one-size-fits-all approach to project management. Tailoring is the deliberate adaptation of the project management approach, processes, tools, and lifecycle to fit the specific context and environment of the project. The goal is to select and adjust the methodology to be "just right" for the work at hand, maximizing value and efficiency.

Several factors influence the tailoring decision. These include the project's size, complexity, and duration; the level of uncertainty in the requirements; the organizational culture; and the industry in which the project operates. For example, a large, complex construction project with stable requirements will benefit from a predictive (waterfall) approach with detailed upfront planning. In contrast, a software development project in a rapidly changing market would be better served by an adaptive (Agile) approach that allows for flexibility and iterative feedback.

Effective tailoring requires careful thought and is a continuous process. The project team should be empowered to make tailoring decisions. An inappropriately tailored approach can lead to inefficiency, such as using overly burdensome processes for a simple project (bureaucracy) or using an approach that is too lightweight for a highly regulated and complex project (chaos). Successful tailoring ensures the project management approach is a help, not a hindrance, to achieving the project's goals.`,
          fa: `اصل متناسب‌سازی تصدیق می‌کند که هر پروژه منحصر به فرد است و هیچ رویکرد یکسانی برای مدیریت پروژه وجود ندارد. متناسب‌سازی، انطباق آگاهانه رویکرد، فرآیندها، ابزارها و چرخه حیات مدیریت پروژه برای تناسب با زمینه و محیط خاص پروژه است. هدف، انتخاب و تنظیم متدولوژی به گونه‌ای است که برای کار مورد نظر "دقیقاً مناسب" باشد و ارزش و کارایی را به حداکثر برساند.

عوامل متعددی بر تصمیم متناسب‌سازی تأثیر می‌گذارند. این موارد شامل اندازه، پیچیدگی و مدت زمان پروژه؛ سطح عدم قطعیت در الزامات؛ فرهنگ سازمانی؛ و صنعتی که پروژه در آن فعالیت می‌کند، می‌شود. برای مثال، یک پروژه ساختمانی بزرگ و پیچیده با الزامات پایدار، از یک رویکرد پیش‌بینی‌کننده (آبشاری) با برنامه‌ریزی دقیق اولیه بهره‌مند خواهد شد. در مقابل، یک پروژه توسعه نرم‌افزار در یک بازار به سرعت در حال تغییر، بهتر است با یک رویکرد انطباقی (چابک) که امکان انعطاف‌پذیری و بازخورد تکراری را فراهم می‌کند، مدیریت شود.

متناسب‌سازی مؤثر نیازمند تفکر دقیق است و یک فرآیند مستمر است. تیم پروژه باید برای اتخاذ تصمیمات متناسب‌سازی توانمند شود. یک رویکرد نامناسب متناسب‌سازی شده می‌تواند منجر به ناکارآمدی شود، مانند استفاده از فرآیندهای بیش از حد سنگین برای یک پروژه ساده (بوروکراسی) یا استفاده از رویکردی که برای یک پروژه بسیار قانونمند و پیچیده بیش از حد سبک است (هرج و مرج). متناسب‌سازی موفق تضمین می‌کند که رویکرد مدیریت پروژه یک کمک است، نه یک مانع، برای دستیابی به اهداف پروژه.`
        },
        summary: [
            {en: 'Tailor approaches based on the project context.', fa: 'رویکردها را بر اساس زمینه پروژه متناسب‌سازی کنید.'},
            {en: 'No single approach is suitable for all projects.', fa: 'هیچ رویکرد واحدی برای همه پروژه‌ها مناسب نیست.'},
            {en: 'Factors like size, complexity, industry, and organizational culture influence the choice of approach.', fa: 'عواملی مانند اندازه، پیچیدگی، صنعت و فرهنگ سازمانی در انتخاب رویکرد مؤثرند.'},
            {en: 'Tailoring processes, tools, and methods helps optimize performance.', fa: 'متناسب‌سازی فرآیندها، ابزارها و روش‌ها به بهینه‌سازی عملکرد کمک می‌کند.'}
        ],
        questions: [
            {
                question: {en: 'What does tailoring mean in project management?', fa: 'متناسب‌سازی در مدیریت پروژه به چه معناست؟'},
                options: [
                    {en: 'Using a fixed methodology for all projects', fa: 'استفاده از یک متدولوژی ثابت برای همه پروژه‌ها'},
                    {en: 'Selecting and adapting approaches based on the specific needs of the project', fa: 'انتخاب و انطباق رویکردها بر اساس نیازهای خاص پروژه'},
                    {en: 'Ignoring standard processes', fa: 'نادیده گرفتن فرآیندهای استاندارد'},
                    {en: 'Reducing project documentation', fa: 'کاهش مستندات پروژه'}
                ],
                correctAnswer: 1,
                explanation: {en: 'Tailoring means carefully selecting the appropriate processes, tools, and methodologies based on the unique context of each project, rather than blindly applying a standard.', fa: 'متناسب‌سازی یعنی انتخاب دقیق فرآیندها، ابزارها و متدولوژی‌های مناسب با توجه به زمینه منحصر به فرد هر پروژه، به جای استفاده کورکورانه از یک استاندارد.'}
            },
            {
                question: {en: 'Which factor influences the tailoring of a project approach?', fa: 'کدام عامل در متناسب‌سازی رویکرد پروژه تأثیرگذار است؟'},
                options: [
                    {en: 'Project complexity', fa: 'پیچیدگی پروژه'},
                    {en: 'Team size', fa: 'اندازه تیم'},
                    {en: 'Requirement uncertainty', fa: 'عدم قطعیت الزامات'},
                    {en: 'All of the above', fa: 'همه موارد'}
                ],
                correctAnswer: 3,
                explanation: {en: 'All these factors and more, such as organizational culture, industry, and required delivery speed, should be considered in the tailoring process.', fa: 'تمام این عوامل و موارد دیگر مانند فرهنگ سازمانی، صنعت و سرعت مورد نیاز برای تحویل، باید در فرآیند متناسب‌سازی در نظر گرفته شوند.'}
            },
            {
                question: {en: 'What is the result of improper tailoring?', fa: 'نتیجه عدم متناسب‌سازی مناسب چیست؟'},
                options: [
                    {en: 'Increased efficiency', fa: 'افزایش کارایی'},
                    {en: 'Reduced costs', fa: 'کاهش هزینه‌ها'},
                    {en: 'Using inefficient or burdensome processes', fa: 'استفاده از فرآیندهای ناکارآمد یا سنگین'},
                    {en: 'Increased team satisfaction', fa: 'افزایش رضایت تیم'}
                ],
                correctAnswer: 2,
                explanation: {en: 'Using a very heavy approach for a small project, or a simple approach for a complex project, leads to inefficiency, wasted resources, and increased risk.', fa: 'استفاده از یک رویکرد بسیار سنگین برای یک پروژه کوچک، یا یک رویکرد ساده برای یک پروژه پیچیده، منجر به ناکارآمدی، اتلاف منابع و افزایش ریسک می‌شود.'}
            }
        ]
    },
    {
        id: 'p8', title: { en: 'Quality', fa: 'کیفیت' }, icon: '✅',
        proseSummary: {
          en: `The principle of Quality focuses on ensuring that the project's deliverables meet the specified requirements and are fit for their intended purpose. Quality is not just about the final product; it's about building quality into the processes used to create that product. The modern approach to quality emphasizes prevention over inspection, meaning it's better to design processes that prevent defects from occurring in the first place rather than finding and fixing them later.

Project quality involves two key dimensions: conformance to requirements and fitness for use. Conformance means the product meets the agreed-upon specifications, while fitness for use means it satisfies the real needs of the end-users. A project can deliver a product that conforms to all specifications but is still considered low quality if it doesn't solve the user's problem. Therefore, understanding customer expectations is paramount.

Quality is a shared responsibility of the entire project team. Everyone has a role to play in ensuring quality, from the project manager who plans for quality to the team members who build and test the product. Activities such as quality planning, quality assurance (auditing processes), and quality control (inspecting deliverables) are integrated throughout the project lifecycle to ensure the final outcome meets or exceeds stakeholder expectations.`,
          fa: `اصل کیفیت بر اطمینان از این تمرکز دارد که اقلام قابل تحویل پروژه الزامات مشخص شده را برآورده کرده و برای هدف مورد نظر خود مناسب هستند. کیفیت فقط به محصول نهایی مربوط نمی‌شود؛ بلکه به معنای گنجاندن کیفیت در فرآیندهای مورد استفاده برای ایجاد آن محصول است. رویکرد مدرن به کیفیت بر پیشگیری به جای بازرسی تأکید دارد، به این معنی که بهتر است فرآیندهایی طراحی کنیم که از ابتدا از بروز نقص جلوگیری کنند تا اینکه بعداً آنها را پیدا و اصلاح کنیم.

کیفیت پروژه شامل دو بعد کلیدی است: انطباق با الزامات و تناسب برای استفاده. انطباق به این معناست که محصول با مشخصات توافق شده مطابقت دارد، در حالی که تناسب برای استفاده به این معناست که نیازهای واقعی کاربران نهایی را برآورده می‌کند. یک پروژه می‌تواند محصولی را تحویل دهد که با تمام مشخصات مطابقت دارد اما اگر مشکل کاربر را حل نکند، همچنان کیفیت پایین تلقی می‌شود. بنابراین، درک انتظارات مشتری از اهمیت بالایی برخوردار است.

کیفیت مسئولیت مشترک کل تیم پروژه است. همه در تضمین کیفیت نقش دارند، از مدیر پروژه که برای کیفیت برنامه‌ریزی می‌کند تا اعضای تیمی که محصول را می‌سازند و آزمایش می‌کنند. فعالیت‌هایی مانند برنامه‌ریزی کیفیت، تضمین کیفیت (ممیزی فرآیندها) و کنترل کیفیت (بازرسی اقلام قابل تحویل) در طول چرخه حیات پروژه یکپارچه شده‌اند تا اطمینان حاصل شود که نتیجه نهایی انتظارات ذینفعان را برآورده می‌کند یا از آن فراتر می‌رود.`
        },
        summary: [
            {en: 'Build quality into processes and deliverables.', fa: 'کیفیت را در فرآیندها و اقلام قابل تحویل بگنجانید.'},
            {en: 'Quality means meeting acceptance criteria and product requirements.', fa: 'کیفیت به معنای برآورده کردن معیارهای پذیرش و الزامات محصول است.'},
            {en: 'Focusing on quality is achieved through preventing defects rather than final inspection.', fa: 'تمرکز بر کیفیت از طریق پیشگیری از نقص به جای بازرسی نهایی انجام می‌شود.'},
            {en: 'Quality is the responsibility of the entire team.', fa: 'کیفیت مسئولیت کل تیم است.'}
        ],
        questions: [
            {
                question: {en: 'What is project quality?', fa: 'کیفیت پروژه چیست؟'},
                options: [
                    {en: 'Delivering a product with many features', fa: 'تحویل محصول با ویژگی‌های فراوان'},
                    {en: 'The degree to which a product conforms to requirements and is fit for use', fa: 'میزان انطباق محصول با الزامات و مناسب بودن آن برای استفاده'},
                    {en: 'Delivering the project under budget', fa: 'تحویل پروژه زیر بودجه'},
                    {en: 'Delivering the project quickly', fa: 'تحویل سریع پروژه'}
                ],
                correctAnswer: 1,
                explanation: {en: 'Quality has two dimensions: Conformance to requirements and Fitness for use.', fa: 'کیفیت دو بعد دارد: انطباق با الزامات مشخص شده (Conformance to requirements) و مناسب بودن برای هدف مورد نظر (Fitness for use).'}
            },
            {
                question: {en: 'What is the best approach to ensuring quality?', fa: 'بهترین رویکرد برای تضمین کیفیت چیست؟'},
                options: [
                    {en: 'Thorough inspection of the final product', fa: 'بازرسی دقیق محصول نهایی'},
                    {en: 'Building quality into all project processes', fa: 'گنجاندن کیفیت در تمام فرآیندهای پروژه'},
                    {en: 'Penalizing the team for every defect', fa: 'جریمه کردن تیم برای هر نقص'},
                    {en: 'Ignoring minor defects', fa: 'نادیده گرفتن نقایص کوچک'}
                ],
                correctAnswer: 1,
                explanation: {en: 'The modern approach to quality emphasizes preventing defects by designing quality processes (Quality by Design), not just finding defects at the end.', fa: 'رویکرد مدرن کیفیت، بر پیشگیری از بروز نقص از طریق طراحی فرآیندهای باکیفیت (Quality by design) تأکید دارد، نه فقط پیدا کردن نقص‌ها در انتها.'}
            },
            {
                question: {en: 'What is the difference between "quality" and "grade"?', fa: 'تفاوت "کیفیت" و "گرید" چیست؟'},
                options: [
                    {en: 'There is no difference', fa: 'هیچ تفاوتی ندارند'},
                    {en: 'Quality is conformance to requirements, while grade is a category based on technical features', fa: 'کیفیت انطباق با الزامات است، گرید یک دسته‌بندی بر اساس ویژگی‌های فنی است'},
                    {en: 'Grade is more important than quality', fa: 'گرید مهم‌تر از کیفیت است'},
                    {en: 'Quality is only important for software', fa: 'کیفیت فقط برای نرم‌افزار مهم است'}
                ],
                correctAnswer: 1,
                explanation: {en: 'A product can be low grade (few features) but high quality (no defects and meets its requirements). For example, a simple, defect-free phone.', fa: 'یک محصول می‌تواند گرید پایین (ویژگی‌های کم) اما کیفیت بالا (بدون نقص و مطابق الزاماتش) داشته باشد. مثلاً یک گوشی ساده و بدون نقص.'}
            }
        ]
    },
    {
        id: 'p9', title: { en: 'Complexity', fa: 'پیچیدگی' }, icon: '🕸️',
        proseSummary: {
          en: `The principle of Complexity acknowledges that projects operate in complex environments and are themselves complex systems. Complexity arises from various sources, including the behavior of the system (many interconnected parts), human behavior (diverse and unpredictable stakeholders), and ambiguity (uncertainty and lack of clarity). Ignoring or underestimating complexity can lead to flawed plans and project failure.

Navigating complexity requires moving beyond rigid, linear thinking. Instead of trying to control every variable, which is often impossible, project teams should adopt flexible and adaptive strategies. This involves continuous learning, frequent feedback loops, and the ability to adjust the plan as new information emerges. Techniques like building prototypes, running experiments, and using iterative development cycles help to manage and reduce complexity over time.

An effective approach to complexity also involves breaking down the project into smaller, more manageable components, while still maintaining a holistic view of the system. Empowering the team to make decentralized decisions can also improve responsiveness. By recognizing complexity as an inherent characteristic of projects, teams can better prepare for surprises, make more resilient plans, and ultimately increase their chances of success in a dynamic world.`,
          fa: `اصل پیچیدگی تصدیق می‌کند که پروژه‌ها در محیط‌های پیچیده عمل می‌کنند و خودشان سیستم‌های پیچیده‌ای هستند. پیچیدگی از منابع مختلفی ناشی می‌شود، از جمله رفتار سیستم (بسیاری از قطعات به هم پیوسته)، رفتار انسانی (ذینفعان متنوع و غیرقابل پیش‌بینی) و ابهام (عدم قطعیت و عدم وضوح). نادیده گرفتن یا دست کم گرفتن پیچیدگی می‌تواند منجر به برنامه‌های ناقص و شکست پروژه شود.

پیمایش در پیچیدگی نیازمند فراتر رفتن از تفکر سفت و سخت و خطی است. به جای تلاش برای کنترل هر متغیر، که اغلب غیرممکن است، تیم‌های پروژه باید استراتژی‌های انعطاف‌پذیر و انطباقی اتخاذ کنند. این شامل یادگیری مداوم، حلقه‌های بازخورد مکرر و توانایی تنظیم برنامه با ظهور اطلاعات جدید است. تکنیک‌هایی مانند ساخت نمونه‌های اولیه، اجرای آزمایش‌ها و استفاده از چرخه‌های توسعه تکراری به مدیریت و کاهش پیچیدگی در طول زمان کمک می‌کند.

یک رویکرد مؤثر به پیچیدگی همچنین شامل تجزیه پروژه به اجزای کوچکتر و قابل مدیریت‌تر است، در حالی که هنوز یک دیدگاه کل‌نگر از سیستم حفظ می‌شود. توانمندسازی تیم برای اتخاذ تصمیمات غیرمتمرکز نیز می‌تواند پاسخگویی را بهبود بخشد. با شناختن پیچیدگی به عنوان یک ویژگی ذاتی پروژه‌ها، تیم‌ها می‌توانند بهتر برای غافلگیری‌ها آماده شوند، برنامه‌های مقاوم‌تری بسازند و در نهایت شانس موفقیت خود را در یک دنیای پویا افزایش دهند.`
        },
        summary: [
            {en: 'Navigate complexity.', fa: 'در پیچیدگی‌ها کاوش کنید.'},
            {en: 'Complexity arises from factors like human behavior, system behavior, uncertainty, and ambiguity.', fa: 'پیچیدگی از عواملی مانند رفتار انسانی، رفتار سیستم، عدم قطعیت و ابهام ناشی می‌شود.'},
            {en: 'Complex projects require flexible approaches and continuous learning.', fa: 'پروژه‌های پیچیده نیازمند رویکردهای انعطاف‌پذیر و یادگیری مداوم هستند.'},
            {en: 'Project managers must be able to identify and adapt to sources of complexity.', fa: 'مدیران پروژه باید بتوانند منابع پیچیدگی را شناسایی کرده و با آنها سازگار شوند.'}
        ],
        questions: [
            {
                question: {en: 'What is a source of complexity in projects?', fa: 'کدام مورد منبع پیچیدگی در پروژه‌ها است؟'},
                options: [
                    {en: 'System behavior (many components and interactions)', fa: 'رفتار سیستم (تعداد زیاد اجزا و تعاملات)'},
                    {en: 'Human behavior (conflicting viewpoints)', fa: 'رفتار انسانی (دیدگاه‌های متناقض)'},
                    {en: 'Ambiguity (lack of clarity in goals)', fa: 'ابهام (عدم وضوح در اهداف)'},
                    {en: 'All of the above', fa: 'همه موارد'}
                ],
                correctAnswer: 3,
                explanation: {en: 'Complexity can arise from various sources, including the technical complexity of the system, unpredictable human dynamics, and a lack of clarity in goals or the project path.', fa: 'پیچیدگی می‌تواند از منابع مختلفی ناشی شود، از جمله پیچیدگی فنی سیستم، پویایی‌های غیرقابل پیش‌بینی انسانی و عدم وضوح در اهداف یا مسیر پروژه.'}
            },
            {
                question: {en: 'How should a complex project be approached?', fa: 'چگونه باید با یک پروژه پیچیده برخورد کرد؟'},
                options: [
                    {en: 'With a fixed and unchangeable plan', fa: 'با یک برنامه ثابت و غیرقابل تغییر'},
                    {en: 'With adaptive and iterative approaches', fa: 'با رویکردهای انطباقی و تکراری'},
                    {en: 'By ignoring the complexity', fa: 'با نادیده گرفتن پیچیدگی'},
                    {en: 'By increasing managerial control', fa: 'با افزایش کنترل مدیریتی'}
                ],
                correctAnswer: 1,
                explanation: {en: 'To deal with complexity, instead of trying to control everything, one should use adaptive approaches that allow the team to learn along the way and adjust to new conditions.', fa: 'برای مقابله با پیچیدگی، به جای تلاش برای کنترل همه چیز، باید از رویکردهای انطباقی استفاده کرد که به تیم اجازه می‌دهد در طول مسیر یاد بگیرد و خود را با شرایط جدید وفق دهد.'}
            },
            {
                question: {en: 'How does complexity differ from risk?', fa: 'پیچیدگی با ریسک چه تفاوتی دارد؟'},
                options: [
                    {en: 'They are the same', fa: 'هیچ تفاوتی ندارند'},
                    {en: 'Risk is an uncertain event, while complexity is an inherent property of the project system', fa: 'ریسک یک رویداد نامشخص است، پیچیدگی ویژگی ذاتی سیستم پروژه است'},
                    {en: 'Complexity is always negative', fa: 'پیچیدگی همیشه منفی است'},
                    {en: 'Risk is always predictable', fa: 'ریسک همیشه قابل پیش‌بینی است'}
                ],
                correctAnswer: 1,
                explanation: {en: 'A risk is a specific event with a specific probability and impact (e.g., probability of supplier delay). Complexity is a general, inherent property of the system that makes it difficult to predict outcomes.', fa: 'ریسک یک رویداد خاص با احتمال و تأثیر مشخص است (مثلاً: احتمال تأخیر تأمین‌کننده). پیچیدگی یک ویژگی کلی و ذاتی سیستم است که پیش‌بینی نتایج را دشوار می‌کند.'}
            }
        ]
    },
    {
        id: 'p10', title: { en: 'Risk', fa: 'ریسک' }, icon: '🎲',
        proseSummary: {
          en: `The principle of Risk acknowledges that all projects involve uncertainty. A risk is an uncertain event or condition that, if it occurs, has a positive (an opportunity) or negative (a threat) effect on project objectives. This principle advocates for a proactive and systematic approach to managing these uncertainties, rather than reacting to them as they happen.

Effective risk management involves a continuous process of identifying, analyzing, prioritizing, and responding to risks throughout the project lifecycle. Identification involves brainstorming potential risks. Analysis assesses the probability and impact of each risk to determine its significance. Prioritization helps the team focus its attention and resources on the most critical risks. Finally, response planning involves developing strategies to deal with each significant risk.

For threats, strategies include avoiding, mitigating, transferring, or accepting the risk. For opportunities, strategies include exploiting, enhancing, sharing, or accepting. The goal is not to eliminate all risk, which is impossible, but to optimize the risk exposure of the project—to intelligently minimize threats and maximize opportunities, thereby increasing the likelihood of achieving project objectives.`,
          fa: `اصل ریسک تصدیق می‌کند که همه پروژه‌ها شامل عدم قطعیت هستند. ریسک یک رویداد یا شرایط نامشخص است که در صورت وقوع، تأثیر مثبت (فرصت) یا منفی (تهدید) بر اهداف پروژه دارد. این اصل از یک رویکرد فعالانه و سیستماتیک برای مدیریت این عدم قطعیت‌ها حمایت می‌کند، به جای اینکه فقط به آنها پس از وقوع واکنش نشان دهد.

مدیریت ریسک مؤثر شامل یک فرآیند مستمر از شناسایی، تحلیل، اولویت‌بندی و پاسخ به ریسک‌ها در طول چرخه حیات پروژه است. شناسایی شامل طوفان فکری برای یافتن ریسک‌های بالقوه است. تحلیل، احتمال و تأثیر هر ریسک را برای تعیین اهمیت آن ارزیابی می‌کند. اولویت‌بندی به تیم کمک می‌کند تا توجه و منابع خود را بر روی حیاتی‌ترین ریسک‌ها متمرکز کند. در نهایت، برنامه‌ریزی پاسخ شامل توسعه استراتژی‌هایی برای مقابله با هر ریسک مهم است.

برای تهدیدها، استراتژی‌ها شامل اجتناب، کاهش، انتقال یا پذیرش ریسک است. برای فرصت‌ها، استراتژی‌ها شامل بهره‌برداری، افزایش، اشتراک‌گذاری یا پذیرش است. هدف، حذف تمام ریسک‌ها نیست، که غیرممکن است، بلکه بهینه‌سازی مواجهه پروژه با ریسک است—یعنی به طور هوشمندانه تهدیدها را به حداقل رسانده و فرصت‌ها را به حداکثر برسانیم و در نتیجه احتمال دستیابی به اهداف پروژه را افزایش دهیم.`
        },
        summary: [
            {en: 'Optimize risk responses.', fa: 'پاسخ به ریسک را بهینه کنید.'},
            {en: 'A risk is an uncertain event or condition that, if it occurs, has a positive (opportunity) or negative (threat) effect on project objectives.', fa: 'ریسک یک رویداد یا شرایط نامشخص است که در صورت وقوع، تأثیر مثبت (فرصت) یا منفی (تهدید) بر اهداف پروژه دارد.'},
            {en: 'Risk management includes identifying, analyzing, planning responses to, and monitoring risks.', fa: 'مدیریت ریسک شامل شناسایی، تحلیل، برنامه‌ریزی پاسخ و نظارت بر ریسک‌ها است.'},
            {en: 'A proactive approach to risk helps increase the chances of success.', fa: 'رویکرد فعالانه به ریسک به افزایش شانس موفقیت کمک می‌کند.'}
        ],
        questions: [
            {
                question: {en: 'What is a risk in a project?', fa: 'ریسک در پروژه چیست؟'},
                options: [
                    {en: 'Any negative event', fa: 'هر رویداد منفی'},
                    {en: 'An uncertain event that can have a positive or negative impact', fa: 'یک رویداد نامشخص که می‌تواند تأثیر مثبت یا منفی داشته باشد'},
                    {en: 'Only technical problems', fa: 'فقط مشکلات فنی'},
                    {en: 'Anything that causes a delay', fa: 'هر چیزی که باعث تأخیر شود'}
                ],
                correctAnswer: 1,
                explanation: {en: 'The standard definition of risk includes both negative (threats) and positive (opportunities) aspects. Risk management means managing both.', fa: 'تعریف استاندارد ریسک شامل هر دو جنبه منفی (تهدید) و مثبت (فرصت) است. مدیریت ریسک به معنای مدیریت هر دوی اینهاست.'}
            },
            {
                question: {en: 'What is a risk with a positive impact called?', fa: 'ریسک با تأثیر مثبت چه نامیده می‌شود؟'},
                options: [
                    {en: 'A threat', fa: 'تهدید'},
                    {en: 'A problem', fa: 'مشکل'},
                    {en: 'An opportunity', fa: 'فرصت'},
                    {en: 'A crisis', fa: 'بحران'}
                ],
                correctAnswer: 2,
                explanation: {en: 'Opportunities are risks that, if they occur, will have a positive impact on project objectives such as cost, time, or quality.', fa: 'فرصت‌ها ریسک‌هایی هستند که در صورت وقوع، تأثیر مثبتی بر اهداف پروژه مانند هزینه، زمان یا کیفیت خواهند داشت.'}
            },
            {
                question: {en: 'Which of the following is a strategy for responding to a threat?', fa: 'کدامیک از استراتژی‌های پاسخ به تهدید است؟'},
                options: [
                    {en: 'Exploit', fa: 'بهره‌برداری'},
                    {en: 'Enhance', fa: 'افزایش'},
                    {en: 'Share', fa: 'اشتراک'},
                    {en: 'Accept', fa: 'پذیرش'}
                ],
                correctAnswer: 3,
                explanation: {en: 'Acceptance is a strategy for responding to a threat in which a decision is made to take no preventive action. Other strategies include Avoid, Transfer, and Mitigate. The other options are for opportunities.', fa: 'پذیرش (Acceptance) یکی از استراتژی‌های پاسخ به تهدید است که در آن تصمیم گرفته می‌شود هیچ اقدام پیشگیرانه‌ای انجام نشود. سایر استراتژی‌ها شامل اجتناب، انتقال و کاهش است. گزینه‌های دیگر برای فرصت‌ها هستند.'}
            }
        ]
    },
    {
        id: 'p11', title: { en: 'Adaptability and Resilience', fa: 'انطباق‌پذیری و تاب‌آوری' }, icon: '🌱',
        proseSummary: {
          en: `This principle acknowledges that projects operate in dynamic and often unpredictable environments. Adaptability is the ability of a project team to respond to changing conditions, new information, or evolving stakeholder needs. It involves being flexible in planning and execution, and willingness to change course when necessary to achieve the best outcome.

Resilience, on the other hand, is the ability to absorb impacts and recover quickly from setbacks or failures. It's about being robust enough to withstand unexpected shocks and having the capacity to learn from them and continue moving forward. A resilient team does not get derailed by a problem; instead, they see it as a learning opportunity and bounce back stronger.

Together, adaptability and resilience are critical for navigating the inherent uncertainty and complexity of projects. Building these capabilities involves fostering a culture of psychological safety where team members feel comfortable raising issues and suggesting changes. It also requires using iterative development approaches, building modular systems that are easier to change, and having contingency plans in place. A team that embraces both adaptability and resilience is far better equipped to succeed in the face of adversity.`,
          fa: `این اصل تصدیق می‌کند که پروژه‌ها در محیط‌های پویا و اغلب غیرقابل پیش‌بینی عمل می‌کنند. انطباق‌پذیری، توانایی تیم پروژه برای پاسخ به شرایط متغیر، اطلاعات جدید یا نیازهای در حال تحول ذینفعان است. این شامل انعطاف‌پذیر بودن در برنامه‌ریزی و اجرا، و تمایل به تغییر مسیر در صورت لزوم برای دستیابی به بهترین نتیجه است.

از سوی دیگر، تاب‌آوری، توانایی جذب ضربه‌ها و بازیابی سریع از شکست‌ها یا ناکامی‌ها است. این به معنای به اندازه کافی قوی بودن برای تحمل شوک‌های غیرمنتظره و داشتن ظرفیت برای یادگیری از آنها و ادامه حرکت به جلو است. یک تیم تاب‌آور با یک مشکل از مسیر خارج نمی‌شود؛ در عوض، آن را به عنوان یک فرصت یادگیری می‌بیند و قوی‌تر برمی‌گردد.

با هم، انطباق‌پذیری و تاب‌آوری برای پیمایش در عدم قطعیت و پیچیدگی ذاتی پروژه‌ها حیاتی هستند. ایجاد این قابلیت‌ها شامل پرورش فرهنگ ایمنی روانی است که در آن اعضای تیم احساس راحتی می‌کنند تا مسائل را مطرح کرده و تغییرات را پیشنهاد دهند. همچنین نیازمند استفاده از رویکردهای توسعه تکراری، ساخت سیستم‌های ماژولار که تغییر آنها آسان‌تر است و داشتن برنامه‌های اقتضایی است. تیمی که هم انطباق‌پذیری و هم تاب‌آوری را در آغوش می‌گیرد، برای موفقیت در مواجهه با سختی‌ها بسیار مجهزتر است.`
        },
        summary: [
            {en: 'Embrace adaptability and resilience.', fa: 'انطباق‌پذیری و تاب‌آوری را در آغوش بگیرید.'},
            {en: 'Adaptability is the ability to respond to changing conditions.', fa: 'انطباق‌پذیری توانایی پاسخ به شرایط متغیر است.'},
            {en: 'Resilience is the ability to absorb impacts and recover quickly from setbacks.', fa: 'تاب‌آوری توانایی جذب ضربه‌ها و بهبودی سریع از شکست‌ها است.'},
            {en: 'These two traits allow the team to succeed in dynamic and uncertain environments.', fa: 'این دو ویژگی به تیم اجازه می‌دهند تا در محیط‌های پویا و نامشخص موفق شوند.'}
        ],
        questions: [
            {
                question: {en: 'What does adaptability mean?', fa: 'انطباق‌پذیری به چه معناست؟'},
                options: [
                    {en: 'Strict adherence to the initial plan', fa: 'پایبندی سفت و سخت به برنامه اولیه'},
                    {en: 'The ability to change approach in response to new conditions', fa: 'توانایی تغییر رویکرد در پاسخ به شرایط جدید'},
                    {en: 'Ignoring changes', fa: 'نادیده گرفتن تغییرات'},
                    {en: 'Executing orders precisely', fa: 'اجرای دقیق دستورات'}
                ],
                correctAnswer: 1,
                explanation: {en: 'Adaptability is the ability of the team and processes to adjust to environmental changes, new requirements, or newly acquired information.', fa: 'انطباق‌پذیری (Adaptability) یعنی توانایی تیم و فرآیندها برای تنظیم شدن با تغییرات محیطی، الزامات جدید یا اطلاعات تازه به دست آمده.'}
            },
            {
                question: {en: 'What is resilience in a project team?', fa: 'تاب‌آوری در یک تیم پروژه چیست؟'},
                options: [
                    {en: 'Never failing', fa: 'هرگز شکست نخوردن'},
                    {en: 'The ability to recover quickly after a problem or setback', fa: 'توانایی بازیابی سریع پس از یک مشکل یا شکست'},
                    {en: 'Having a large budget', fa: 'داشتن بودجه زیاد'},
                    {en: 'Having a lot of time', fa: 'داشتن زمان زیاد'}
                ],
                correctAnswer: 1,
                explanation: {en: 'Resilience is the capacity of a team to withstand problems and recover quickly from setbacks, continuing to move toward the goal.', fa: 'تاب‌آوری (Resilience) به معنای ظرفیت یک تیم برای تحمل مشکلات و بازیابی سریع از شکست‌ها و ادامه حرکت به سمت هدف است.'}
            },
            {
                question: {en: 'Why is adaptability important in today\'s projects?', fa: 'چرا انطباق‌پذیری در پروژه‌های امروزی مهم است؟'},
                options: [
                    {en: 'Because the business environment is static', fa: 'چون محیط کسب‌وکار ثابت است'},
                    {en: 'Because the business environment is rapidly changing', fa: 'چون محیط کسب‌وکار به سرعت در حال تغییر است'},
                    {en: 'Because planning is no longer important', fa: 'چون برنامه‌ریزی دیگر مهم نیست'},
                    {en: 'Because customers always know what they want', fa: 'چون مشتریان همیشه می‌دانند چه می‌خواهند'}
                ],
                correctAnswer: 1,
                explanation: {en: 'In a world of rapid technological and market changes, teams that cannot adapt quickly fall behind the competition.', fa: 'در دنیای پر از تغییرات سریع فناوری و بازار، تیم‌هایی که نمی‌توانند خود را تطبیق دهند، به سرعت از رقابت خارج می‌شوند.'}
            }
        ]
    },
    {
        id: 'p12', title: { en: 'Change Management', fa: 'مدیریت تغییر' }, icon: '🔄',
        proseSummary: {
          en: `The principle of Change Management acknowledges that projects are catalysts for change, and that the successful adoption of a project's output depends on how well that change is managed. It is not enough to simply deliver a new product or system; the people affected by it must be prepared, supported, and willing to adopt it for the project to realize its intended value.

This principle calls for a structured and proactive approach to managing the human side of change. This involves understanding who will be affected by the change and how. It requires clear and consistent communication to explain the reasons for the change and the benefits it will bring. Engaging stakeholders and involving them in the change process can reduce resistance and build a sense of ownership.

Effective change management also involves providing the necessary training and support to help people develop the skills and confidence to work in the new way. It recognizes that resistance is a natural human reaction and seeks to address the underlying concerns rather than ignoring them. By integrating change management activities into the project lifecycle, project teams can ensure a smoother transition from the current state to the desired future state, leading to faster adoption, greater benefits realization, and more sustainable outcomes.`,
          fa: `اصل مدیریت تغییر تصدیق می‌کند که پروژه‌ها کاتالیزور تغییر هستند و پذیرش موفقیت‌آمیز خروجی یک پروژه به نحوه مدیریت آن تغییر بستگی دارد. صرفاً تحویل یک محصول یا سیستم جدید کافی نیست؛ افرادی که تحت تأثیر آن قرار می‌گیرند باید آماده، حمایت شده و مایل به پذیرش آن باشند تا پروژه بتواند ارزش مورد نظر خود را تحقق بخشد.

این اصل خواستار یک رویکرد ساختاریافته و فعالانه برای مدیریت جنبه انسانی تغییر است. این شامل درک این است که چه کسی و چگونه تحت تأثیر تغییر قرار خواهد گرفت. نیازمند ارتباطات روشن و مداوم برای توضیح دلایل تغییر و مزایایی که به همراه خواهد داشت، است. درگیر کردن ذینفعان و مشارکت دادن آنها در فرآیند تغییر می‌تواند مقاومت را کاهش داده و حس مالکیت ایجاد کند.

مدیریت تغییر مؤثر همچنین شامل فراهم کردن آموزش و پشتیبانی لازم برای کمک به افراد در توسعه مهارت‌ها و اعتماد به نفس برای کار به روش جدید است. این اصل تصدیق می‌کند که مقاومت یک واکنش طبیعی انسانی است و به جای نادیده گرفتن، به دنبال رسیدگی به نگرانی‌های اساسی است. با یکپارچه‌سازی فعالیت‌های مدیریت تغییر در چرخه حیات پروژه، تیم‌های پروژه می‌توانند از یک انتقال روان‌تر از وضعیت فعلی به وضعیت آینده مطلوب اطمینان حاصل کنند که منجر به پذیرش سریع‌تر، تحقق منافع بیشتر و نتایج پایدارتر می‌شود.`
        },
        summary: [
            {en: 'Enable change to achieve the envisioned future state.', fa: 'تغییر را برای دستیابی به وضعیت آینده مطلوب، ممکن سازید.'},
            {en: 'Projects inherently create change.', fa: 'پروژه‌ها ذاتاً تغییر ایجاد می‌کنند.'},
            {en: 'Change management helps prepare stakeholders to accept and use the project outputs.', fa: 'مدیریت تغییر به آماده‌سازی ذینفعان برای پذیرش و استفاده از خروجی‌های پروژه کمک می‌کند.'},
            {en: 'Transparent communication and stakeholder involvement are essential for successful change management.', fa: 'ارتباطات شفاف و مشارکت ذینفعان برای مدیریت تغییر موفق ضروری است.'}
        ],
        questions: [
            {
                question: {en: 'What is the main purpose of change management in a project?', fa: 'هدف اصلی مدیریت تغییر در پروژه چیست؟'},
                options: [
                    {en: 'To prevent any changes in the project', fa: 'جلوگیری از هرگونه تغییر در پروژه'},
                    {en: 'To document changes', fa: 'مستندسازی تغییرات'},
                    {en: 'To help stakeholders accept and adapt to the changes resulting from the project', fa: 'کمک به ذینفعان برای پذیرش و تطبیق با تغییرات ناشی از پروژه'},
                    {en: 'To implement changes without informing others', fa: 'اعمال تغییرات بدون اطلاع دیگران'}
                ],
                correctAnswer: 2,
                explanation: {en: 'Change management focuses on the human side of change, aiming to ensure that people affected by the project accept the changes and effectively use the results.', fa: 'مدیریت تغییر بر جنبه انسانی تغییر تمرکز دارد و هدف آن اطمینان از این است که افراد تحت تأثیر پروژه، تغییرات را بپذیرند و از نتایج آن به طور مؤثر استفاده کنند.'}
            },
            {
                question: {en: 'Who is primarily responsible for enabling change?', fa: 'چه کسی مسئول اصلی فعال‌سازی تغییر است؟'},
                options: [
                    {en: 'Only the project manager', fa: 'فقط مدیر پروژه'},
                    {en: 'It is a shared responsibility between the project team and organizational leaders', fa: 'این یک مسئولیت مشترک بین تیم پروژه و رهبران سازمان است'},
                    {en: 'Only the HR department', fa: 'فقط واحد منابع انسانی'},
                    {en: 'Only the customer', fa: 'فقط مشتری'}
                ],
                correctAnswer: 1,
                explanation: {en: 'Although the project manager plays a key role, successful change requires the support and participation of business leaders to drive the change at the organizational level.', fa: 'اگرچه مدیر پروژه نقش کلیدی دارد، اما موفقیت تغییر نیازمند حمایت و مشارکت رهبران کسب‌وکار است تا تغییر را در سطح سازمان هدایت کنند.'}
            },
            {
                question: {en: 'Why is stakeholder involvement important in the change process?', fa: 'چرا مشارکت ذینفعان در فرآیند تغییر مهم است؟'},
                options: [
                    {en: 'To reduce resistance to change', fa: 'برای کاهش مقاومت در برابر تغییر'},
                    {en: 'To increase the likelihood of solution acceptance', fa: 'برای افزایش احتمال پذیرش راه‌حل'},
                    {en: 'To receive valuable feedback', fa: 'برای دریافت بازخورد ارزشمند'},
                    {en: 'All of the above', fa: 'همه موارد'}
                ],
                correctAnswer: 3,
                explanation: {en: 'Involving stakeholders in the change process makes them feel a sense of ownership, reduces their resistance, and ensures the final solution is better aligned with their real needs.', fa: 'مشارکت دادن ذینفعان در فرآیند تغییر باعث می‌شود آنها احساس مالکیت کنند، مقاومتشان کاهش یابد و راه‌حل نهایی بهتر با نیازهای واقعی آنها منطبق باشد.'}
            }
        ]
    }
  ],
  domains: [
    {
      id: 'd1', title: {en: 'Stakeholder', fa: 'ذینفعان'}, icon: '🗣️',
      proseSummary: {
        en: `The Stakeholder Performance Domain is dedicated to the activities and functions required to build and maintain productive relationships with all individuals, groups, or organizations that could impact or be impacted by the project. Successful projects depend not just on delivering a product, but on ensuring that the product is valuable and acceptable to those it affects. Therefore, stakeholder engagement is not an optional activity but a critical driver of project success.
\n
The process begins with thorough stakeholder identification. This involves brainstorming and investigating to create a comprehensive list of anyone who has a "stake" in the project. Stakeholders can be internal, such as team members, managers, and executives, or external, such as customers, suppliers, government agencies, and the community. This is not a one-time activity; the stakeholder landscape can change, so identification must be an ongoing process throughout the project lifecycle.
\n
Once identified, stakeholders must be analyzed to understand their needs, expectations, interests, and potential influence on the project. A common and effective tool for this is the power/interest grid (or power/influence grid), which categorizes stakeholders based on their level of authority (power) and their level of concern about the project’s outcomes (interest). This analysis helps the project team prioritize their engagement efforts.
\n
The power/interest grid leads to four main engagement strategies. High-power, high-interest stakeholders must be managed closely, with frequent and detailed communication. High-power, low-interest stakeholders should be kept satisfied, as they have the power to influence the project even if they are not actively involved. Low-power, high-interest stakeholders should be kept informed, as they can be valuable allies and provide useful feedback. Finally, low-power, low-interest stakeholders require minimal effort and should simply be monitored.
\n
Beyond the power/interest grid, other models like the Salience Model (analyzing power, urgency, and legitimacy) or a Stakeholder Cube (a 3D version of the grid) can provide deeper insights. The goal of analysis is to move from a simple list of names to a rich understanding of the political and social landscape of the project.
\n
Based on this analysis, the project team develops a stakeholder engagement plan. This plan outlines tailored strategies for communicating with and involving different stakeholder groups. It defines the frequency, format, and content of communications to ensure that each stakeholder receives the right information at the right time through the most effective channel.
\n
Effective communication is the cornerstone of engagement. It can be push communication (e.g., emails, reports), pull communication (e.g., a project website where stakeholders can retrieve information), or interactive communication (e.g., meetings, workshops). For complex issues or important decisions, interactive communication is usually the most effective method as it allows for real-time feedback and collaboration.
\n
Managing stakeholder expectations is another critical activity. It involves clarifying what the project will deliver and what it will not. By setting realistic expectations from the beginning and communicating progress and changes transparently, the project team can prevent misunderstandings and build trust. This trust is essential for navigating the challenges that inevitably arise during a project.
\n
Stakeholder engagement is also about actively involving them in the project where appropriate. This can include involving them in requirements gathering, product reviews, and key decisions. This involvement not only provides the project with valuable expertise and feedback but also builds a sense of shared ownership, which significantly increases the likelihood of the project's outcome being accepted and embraced.
\n
Finally, stakeholder engagement must be monitored and adjusted throughout the project. The team should regularly ask if the current engagement strategies are effective. Are stakeholders receiving the information they need? Are their concerns being addressed? By collecting feedback and observing stakeholder behavior, the project team can adapt its approach to ensure that relationships remain positive and productive, ultimately paving the way for a successful project outcome.`,
        fa: `حوزه عملکرد ذینفعان به فعالیت‌ها و عملکردهای مورد نیاز برای ایجاد و حفظ روابط سازنده با همه افراد، گروه‌ها یا سازمان‌هایی اختصاص دارد که می‌توانند بر پروژه تأثیر بگذارند یا از آن تأثیر بپذیرند. پروژه‌های موفق نه تنها به تحویل یک محصول، بلکه به اطمینان از ارزشمند و قابل قبول بودن آن محصول برای افراد تحت تأثیر آن بستگی دارد. بنابراین، تعامل با ذینفعان یک فعالیت اختیاری نیست، بلکه یک عامل حیاتی برای موفقیت پروژه است.
\n
این فرآیند با شناسایی کامل ذینفعان آغاز می‌شود. این شامل طوفان فکری و تحقیق برای ایجاد یک لیست جامع از هر کسی است که در پروژه "سهمی" دارد. ذینفعان می‌توانند داخلی باشند، مانند اعضای تیم، مدیران و مدیران اجرایی، یا خارجی، مانند مشتریان، تأمین‌کنندگان، سازمان‌های دولتی و جامعه. این یک فعالیت یکباره نیست؛ چشم‌انداز ذینفعان می‌تواند تغییر کند، بنابراین شناسایی باید یک فرآیند مستمر در طول چرخه حیات پروژه باشد.
\n
پس از شناسایی، ذینفعان باید برای درک نیازها، انتظارات، علایق و نفوذ بالقوه آنها بر پروژه تحلیل شوند. یک ابزار رایج و مؤثر برای این کار، ماتریس قدرت/علاقه (یا قدرت/نفوذ) است که ذینفعان را بر اساس سطح اختیار (قدرت) و سطح نگرانی آنها در مورد نتایج پروژه (علاقه) دسته‌بندی می‌کند. این تحلیل به تیم پروژه کمک می‌کند تا تلاش‌های تعاملی خود را اولویت‌بندی کند.
\n
ماتریس قدرت/علاقه به چهار استراتژی اصلی تعامل منجر می‌شود. ذینفعان با قدرت بالا و علاقه بالا باید از نزدیک مدیریت شوند، با ارتباطات مکرر و دقیق. ذینفعان با قدرت بالا و علاقه پایین باید راضی نگه داشته شوند، زیرا آنها قدرت تأثیرگذاری بر پروژه را دارند حتی اگر فعالانه درگیر نباشند. ذینفعان با قدرت پایین و علاقه بالا باید مطلع نگه داشته شوند، زیرا می‌توانند متحدان ارزشمندی باشند و بازخورد مفیدی ارائه دهند. در نهایت، ذینفعان با قدرت پایین و علاقه پایین به حداقل تلاش نیاز دارند و فقط باید نظارت شوند.
\n
فراتر از ماتریس قدرت/علاقه، مدل‌های دیگری مانند مدل برجستگی (تحلیل قدرت، فوریت و مشروعیت) یا مکعب ذینفعان (نسخه سه‌بعدی ماتریس) می‌توانند بینش‌های عمیق‌تری ارائه دهند. هدف از تحلیل، حرکت از یک لیست ساده از اسامی به یک درک غنی از چشم‌انداز سیاسی و اجتماعی پروژه است.
\n
بر اساس این تحلیل، تیم پروژه یک برنامه تعامل با ذینفعان را توسعه می‌دهد. این برنامه استراتژی‌های متناسب برای برقراری ارتباط و درگیر کردن گروه‌های مختلف ذینفعان را مشخص می‌کند. این برنامه فرکانس، قالب و محتوای ارتباطات را تعریف می‌کند تا اطمینان حاصل شود که هر ذینفع اطلاعات درست را در زمان مناسب از طریق مؤثرترین کانال دریافت می‌کند.
\n
ارتباطات مؤثر سنگ بنای تعامل است. این می‌تواند ارتباطات فشاری (مانند ایمیل‌ها، گزارش‌ها)، ارتباطات کششی (مانند وب‌سایت پروژه که ذینفعان می‌توانند اطلاعات را بازیابی کنند) یا ارتباطات تعاملی (مانند جلسات، کارگاه‌ها) باشد. برای مسائل پیچیده یا تصمیمات مهم، ارتباطات تعاملی معمولاً مؤثرترین روش است زیرا امکان بازخورد بی‌درنگ و همکاری را فراهم می‌کند.
\n
مدیریت انتظارات ذینفعان یکی دیگر از فعالیت‌های حیاتی است. این شامل روشن کردن این است که پروژه چه چیزی را تحویل خواهد داد و چه چیزی را نه. با تعیین انتظارات واقع‌بینانه از ابتدا و برقراری ارتباط شفاف در مورد پیشرفت و تغییرات، تیم پروژه می‌تواند از سوء تفاهم‌ها جلوگیری کرده و اعتماد ایجاد کند. این اعتماد برای پیمایش چالش‌هایی که به ناچار در طول یک پروژه به وجود می‌آیند، ضروری است.
\n
تعامل با ذینفعان همچنین در مورد درگیر کردن فعالانه آنها در پروژه در موارد مقتضی است. این می‌تواند شامل درگیر کردن آنها در جمع‌آوری الزامات، بازبینی محصول و تصمیمات کلیدی باشد. این مشارکت نه تنها تخصص و بازخورد ارزشمندی را برای پروژه فراهم می‌کند، بلکه حس مالکیت مشترک را نیز ایجاد می‌کند که به طور قابل توجهی احتمال پذیرش و استقبال از نتیجه پروژه را افزایش می‌دهد.
\n
در نهایت، تعامل با ذینفعان باید در طول پروژه نظارت و تنظیم شود. تیم باید به طور منظم بپرسد که آیا استراتژی‌های تعامل فعلی مؤثر هستند یا خیر. آیا ذینفعان اطلاعات مورد نیاز خود را دریافت می‌کنند؟ آیا به نگرانی‌های آنها رسیدگی می‌شود؟ با جمع‌آوری بازخورد و مشاهده رفتار ذینفعان، تیم پروژه می‌تواند رویکرد خود را تطبیق دهد تا اطمینان حاصل شود که روابط مثبت و سازنده باقی می‌مانند و در نهایت راه را برای یک نتیجه موفق پروژه هموار می‌کند.`
      },
      summary: [
          { en: "Effectively engage with stakeholders throughout the project lifecycle.", fa: "در طول چرخه حیات پروژه به طور مؤثر با ذینفعان تعامل کنید." },
          { en: "Stakeholder engagement includes identification, understanding, analysis, and communication.", fa: "تعامل با ذینفعان شامل شناسایی، درک، تحلیل و ارتباط است." },
          { en: "Tailor engagement strategies to different stakeholder groups.", fa: "استراتژی‌های تعامل را برای گروه‌های مختلف ذینفعان متناسب‌سازی کنید." }
      ],
      questions: [
        {
          question: { en: 'What is the first step in stakeholder engagement?', fa: 'اولین قدم در تعامل با ذینفعان چیست؟' },
          options: [
            { en: 'Analysis', fa: 'تحلیل' },
            { en: 'Identification', fa: 'شناسایی' },
            { en: 'Communication', fa: 'ارتباطات' },
            { en: 'Reporting', fa: 'گزارش‌دهی' }
          ],
          correctAnswer: 1,
          explanation: { en: 'The first step is always to identify who the stakeholders are before any analysis or engagement can begin.', fa: 'اولین قدم همیشه شناسایی این است که ذینفعان چه کسانی هستند، قبل از اینکه هرگونه تحلیل یا تعاملی آغاز شود.' }
        },
        {
          question: { en: 'A project manager uses a Power/Interest grid for what purpose?', fa: 'یک مدیر پروژه از ماتریس قدرت/علاقه برای چه هدفی استفاده می‌کند؟' },
          options: [
            { en: 'To calculate project costs', fa: 'برای محاسبه هزینه‌های پروژه' },
            { en: 'To schedule project tasks', fa: 'برای زمان‌بندی وظایف پروژه' },
            { en: 'To prioritize stakeholder engagement efforts', fa: 'برای اولویت‌بندی تلاش‌های مربوط به تعامل با ذینفعان' },
            { en: 'To measure team performance', fa: 'برای اندازه‌گیری عملکرد تیم' }
          ],
          correctAnswer: 2,
          explanation: { en: 'The Power/Interest grid is a tool used to categorize stakeholders, which helps in prioritizing them and defining the appropriate engagement strategy for each group.', fa: 'ماتریس قدرت/علاقه ابزاری برای دسته‌بندی ذینفعان است که به اولویت‌بندی آنها و تعریف استراتژی تعامل مناسب برای هر گروه کمک می‌کند.' }
        },
        {
          question: { en: 'Which communication method is most suitable for resolving a complex issue with a key stakeholder?', fa: 'کدام روش ارتباطی برای حل یک مسئله پیچیده با یک ذینفع کلیدی مناسب‌تر است؟' },
          options: [
            { en: 'Email', fa: 'ایمیل' },
            { en: 'Interactive communication (e.g., a meeting)', fa: 'ارتباط تعاملی (مثلاً یک جلسه)' },
            { en: 'Project status report', fa: 'گزارش وضعیت پروژه' },
            { en: 'Newsletter', fa: 'خبرنامه' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Interactive, face-to-face, or video-call meetings are best for complex topics as they allow for immediate feedback, clarification of doubts, and reading non-verbal cues.', fa: 'جلسات تعاملی، چه حضوری و چه تصویری، برای موضوعات پیچیده بهترین گزینه هستند زیرا امکان بازخورد فوری، رفع ابهامات و خواندن نشانه‌های غیرکلامی را فراهم می‌کنند.' }
        },
        {
          question: { en: 'Which of the following best describes a key stakeholder?', fa: 'کدام‌یک از گزینه‌های زیر بهترین توصیف از یک ذینفع کلیدی است؟' },
          options: [
            { en: 'Any person who knows about the project', fa: 'هر فردی که از پروژه اطلاع دارد' },
            { en: 'A stakeholder with high influence or high interest in the project', fa: 'ذینفعی با نفوذ بالا یا علاقه زیاد به پروژه' },
            { en: 'Only the project customer', fa: 'فقط مشتری پروژه' },
            { en: 'Only the project team members', fa: 'فقط اعضای تیم پروژه' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Key stakeholders are those who have significant influence over the project or are highly interested in its outcome. They require the most attention from the project manager.', fa: 'ذینفعان کلیدی کسانی هستند که نفوذ قابل توجهی بر پروژه دارند یا علاقه زیادی به نتیجه آن دارند. آنها نیازمند بیشترین توجه از سوی مدیر پروژه هستند.' }
        },
        {
          question: { en: 'What is a likely outcome of poor stakeholder engagement?', fa: 'یک نتیجه محتمل از تعامل ضعیف با ذینفعان چیست؟' },
          options: [
            { en: 'Reduced project costs', fa: 'کاهش هزینه‌های پروژه' },
            { en: 'Increased support for the project', fa: 'افزایش حمایت از پروژه' },
            { en: 'Project delays and unmet requirements', fa: 'تأخیر در پروژه و برآورده نشدن الزامات' },
            { en: 'Faster project completion', fa: 'تکمیل سریع‌تر پروژه' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Poor engagement can lead to misunderstandings, conflicts, and a lack of support, which often results in project delays and a final product that does not meet stakeholder needs.', fa: 'تعامل ضعیف می‌تواند منجر به سوءتفاهم، درگیری و عدم حمایت شود که اغلب به تأخیر در پروژه و محصول نهایی که نیازهای ذینفعان را برآورده نمی‌کند، می‌انجامد.' }
        }
      ]
    },
    {
      id: 'd2', title: { en: 'Team', fa: 'تیم' }, icon: '👨‍👩‍👧‍👦',
      proseSummary: {
        en: `The Team Performance Domain encompasses all activities and functions related to the people responsible for delivering the project's outcomes. It recognizes that a project's success is fundamentally dependent on the performance of its team. This domain is about more than just assembling individuals with the right skills; it's about cultivating a cohesive unit that can collaborate, solve problems, and achieve shared goals effectively.
\n
A key aspect of this domain is understanding and guiding team development. A widely recognized model is Bruce Tuckman's stages of team development: Forming, Storming, Norming, and Performing. In the Forming stage, team members are polite and uncertain as they get to know each other. The Storming stage is characterized by conflict as different ideas and personalities clash. This is a critical phase where the project manager must facilitate communication and help resolve disputes constructively.
\n
Following Storming, the team enters the Norming stage, where they begin to resolve their differences, appreciate each other's strengths, and agree on common working practices and "rules of engagement." This leads to the Performing stage, where the team operates as a well-organized and interdependent unit, focused on achieving project goals with high efficiency and autonomy. A fifth stage, Adjourning, involves the completion of the project and the disbanding of the team.
\n
Central to fostering a high-performing team is the concept of leadership. This domain emphasizes servant leadership, where the leader's primary focus is on the growth and well-being of their team members. A servant leader removes impediments, provides resources and support, and creates an environment where the team can excel. This style builds trust and empowers the team, leading to higher motivation and greater ownership of the project's success.
\n
Creating a collaborative environment is paramount. This involves establishing clear roles and responsibilities so that every member understands their contribution and how it fits into the bigger picture. It also means fostering open and honest communication channels where ideas can be shared freely, and feedback can be given and received constructively without fear of blame.
\n
Emotional intelligence (EQ) is a critical skill for both the project manager and the team members. EQ is the ability to recognize, understand, and manage one's own emotions, as well as to recognize, understand, and influence the emotions of others. High emotional intelligence within a team leads to better communication, more effective conflict resolution, and stronger interpersonal relationships.
\n
Conflict is an inevitable part of any project. The Team Performance Domain stresses that conflict, when managed well, can be beneficial, leading to better ideas and stronger solutions. The project manager must be adept at conflict resolution techniques, such as collaborating to find a win-win solution, compromising, or smoothing over minor disagreements to maintain harmony. The goal is to address the root cause of the conflict rather than just its symptoms.
\n
Building a shared sense of ownership is another vital function. When team members feel that they are not just executing tasks but are co-owners of the project's vision and outcomes, their commitment and engagement increase dramatically. This can be achieved through inclusive decision-making, celebrating successes together, and being transparent about challenges.
\n
Team culture is the collective personality of the team. A positive and productive culture is built on a foundation of mutual respect, trust, and psychological safety. Psychological safety means creating an environment where team members feel safe to take interpersonal risks, such as speaking up with a new idea, admitting a mistake, or challenging the status quo, without fear of being shamed or punished.
\n
Ultimately, the Team Performance Domain is about transforming a group of individuals into a powerful, synergistic unit. It requires a conscious and continuous effort from the project leader to build trust, facilitate communication, manage development stages, and empower members to do their best work. A high-performing team is the most valuable asset a project can have.`,
        fa: `حوزه عملکرد تیم شامل تمام فعالیت‌ها و عملکردهای مربوط به افرادی است که مسئول تحویل نتایج پروژه هستند. این حوزه تصدیق می‌کند که موفقیت یک پروژه اساساً به عملکرد تیم آن بستگی دارد. این حوزه چیزی فراتر از صرفاً گرد هم آوردن افراد با مهارت‌های مناسب است؛ این در مورد پرورش یک واحد منسجم است که بتواند به طور مؤثر همکاری کند، مشکلات را حل کند و به اهداف مشترک دست یابد.
\n
یک جنبه کلیدی این حوزه، درک و هدایت توسعه تیم است. یک مدل شناخته شده، مراحل توسعه تیم بروس تاکمن است: شکل‌گیری (Forming)، طوفان (Storming)، هنجارسازی (Norming) و عملکرد (Performing). در مرحله شکل‌گیری، اعضای تیم در حین آشنایی با یکدیگر، مؤدب و نامطمئن هستند. مرحله طوفان با درگیری مشخص می‌شود زیرا ایده‌ها و شخصیت‌های مختلف با هم برخورد می‌کنند. این یک مرحله حیاتی است که در آن مدیر پروژه باید ارتباطات را تسهیل کرده و به حل سازنده اختلافات کمک کند.
\n
پس از طوفان، تیم وارد مرحله هنجارسازی می‌شود، جایی که آنها شروع به حل اختلافات خود می‌کنند، نقاط قوت یکدیگر را درک می‌کنند و بر روی شیوه‌های کاری مشترک و "قوانین تعامل" توافق می‌کنند. این به مرحله عملکرد منجر می‌شود، جایی که تیم به عنوان یک واحد کاملاً سازمان‌یافته و به هم وابسته عمل می‌کند و بر دستیابی به اهداف پروژه با کارایی و استقلال بالا متمرکز است. مرحله پنجم، انحلال (Adjourning)، شامل تکمیل پروژه و منحل شدن تیم است.
\n
محور اصلی پرورش یک تیم با عملکرد بالا، مفهوم رهبری است. این حوزه بر رهبری خدمتگزار تأکید دارد، جایی که تمرکز اصلی رهبر بر رشد و رفاه اعضای تیم خود است. یک رهبر خدمتگزار موانع را برطرف می‌کند، منابع و پشتیبانی را فراهم می‌کند و محیطی را ایجاد می‌کند که تیم بتواند در آن برتر باشد. این سبک، اعتماد ایجاد می‌کند و تیم را توانمند می‌سازد، که منجر به انگیزه بالاتر و مالکیت بیشتر بر موفقیت پروژه می‌شود.
\n
ایجاد یک محیط مشارکتی از اهمیت بالایی برخوردار است. این شامل ایجاد نقش‌ها و مسئولیت‌های روشن است تا هر عضو سهم خود و نحوه قرارگیری آن در تصویر بزرگتر را درک کند. همچنین به معنای پرورش کانال‌های ارتباطی باز و صادقانه است که در آن ایده‌ها می‌توانند آزادانه به اشتراک گذاشته شوند و بازخورد می‌تواند بدون ترس از سرزنش، به طور سازنده داده و دریافت شود.
\n
هوش هیجانی (EQ) یک مهارت حیاتی هم برای مدیر پروژه و هم برای اعضای تیم است. هوش هیجانی توانایی شناخت، درک و مدیریت احساسات خود و همچنین شناخت، درک و تأثیرگذاری بر احساسات دیگران است. هوش هیجانی بالا در یک تیم منجر به ارتباطات بهتر، حل تعارض مؤثرتر و روابط بین فردی قوی‌تر می‌شود.
\n
تعارض بخش اجتناب‌ناپذیر هر پروژه‌ای است. حوزه عملکرد تیم تأکید می‌کند که تعارض، زمانی که به خوبی مدیریت شود، می‌تواند مفید باشد و منجر به ایده‌های بهتر و راه‌حل‌های قوی‌تر شود. مدیر پروژه باید در تکنیک‌های حل تعارض، مانند همکاری برای یافتن راه‌حل برد-برد، مصالحه یا هموار کردن اختلافات جزئی برای حفظ هماهنگی، مهارت داشته باشد. هدف، رسیدگی به علت ریشه‌ای تعارض است نه فقط علائم آن.
\n
ایجاد حس مالکیت مشترک یکی دیگر از عملکردهای حیاتی است. وقتی اعضای تیم احساس می‌کنند که فقط در حال اجرای وظایف نیستند بلکه współwłaścicielان چشم‌انداز و نتایج پروژه هستند، تعهد و مشارکت آنها به شدت افزایش می‌یابد. این را می‌توان از طریق تصمیم‌گیری فراگیر، جشن گرفتن موفقیت‌ها با هم و شفافیت در مورد چالش‌ها به دست آورد.
\n
فرهنگ تیم، شخصیت جمعی تیم است. یک فرهنگ مثبت و سازنده بر پایه احترام متقابل، اعتماد و ایمنی روانی بنا شده است. ایمنی روانی به معنای ایجاد محیطی است که در آن اعضای تیم احساس امنیت می‌کنند تا ریسک‌های بین فردی را بپذیرند، مانند صحبت کردن با یک ایده جدید، اعتراف به یک اشتباه یا به چالش کشیدن وضعیت موجود، بدون ترس از شرمنده شدن یا مجازات.
\n
در نهایت، حوزه عملکرد تیم در مورد تبدیل گروهی از افراد به یک واحد قدرتمند و هم‌افزا است. این نیازمند تلاش آگاهانه و مستمر از سوی رهبر پروژه برای ایجاد اعتماد، تسهیل ارتباطات، مدیریت مراحل توسعه و توانمندسازی اعضا برای انجام بهترین کارشان است. یک تیم با عملکرد بالا، با ارزش‌ترین دارایی است که یک پروژه می‌تواند داشته باشد.`
      },
      summary: [
        { en: 'Cultivate a project team culture of accountability and respect.', fa: 'فرهنگ پاسخگویی و احترام را در تیم پروژه پرورش دهید.' },
        { en: 'Servant leadership is key to empowering the team.', fa: 'رهبری خدمتگزار کلید توانمندسازی تیم است.' },
        { en: 'Foster open communication and shared ownership for high performance.', fa: 'ارتباطات باز و مالکیت مشترک را برای عملکرد بالا تقویت کنید.' }
      ],
      questions: [
        {
          question: { en: 'In a high-performing project team, what is the most important element?', fa: 'در یک تیم پروژه با عملکرد بالا، مهمترین عنصر چیست؟' },
          options: [
            { en: 'Strict adherence to hierarchy', fa: 'پایبندی شدید به سلسله مراتب' },
            { en: 'Individual expertise', fa: 'تخصص فردی' },
            { en: 'A culture of trust and collaboration', fa: 'فرهنگ اعتماد و همکاری' },
            { en: 'A detailed project plan', fa: 'یک برنامه پروژه دقیق' }
          ],
          correctAnswer: 2,
          explanation: { en: 'While expertise and planning are important, a culture of trust and collaboration is the foundation that enables a team to effectively leverage its skills and navigate challenges.', fa: 'در حالی که تخصص و برنامه‌ریزی مهم هستند، فرهنگ اعتماد و همکاری بنیادی است که به تیم امکان می‌دهد تا به طور مؤثر از مهارت‌های خود استفاده کرده و چالش‌ها را پشت سر بگذارد.' }
        },
        {
          question: { en: 'According to Tuckman\'s model, what is the "Storming" stage of team development?', fa: 'طبق مدل تاکمن، مرحله "طوفان" (Storming) در توسعه تیم چیست؟' },
          options: [
            { en: 'Team members get to know each other', fa: 'اعضای تیم با یکدیگر آشنا می‌شوند' },
            { en: 'The team works harmoniously and effectively', fa: 'تیم به صورت هماهنگ و مؤثر کار می‌کند' },
            { en: 'Team members may have disagreements and conflicts', fa: 'اعضای تیم ممکن است با یکدیگر اختلاف نظر و درگیری داشته باشند' },
            { en: 'The team completes the project and disbands', fa: 'تیم پروژه را تمام کرده و منحل می‌شود' }
          ],
          correctAnswer: 2,
          explanation: { en: 'The Storming stage is characterized by conflict and competition as individual personalities and work styles clash. It is a necessary stage for the team to grow.', fa: 'مرحله طوفان با درگیری و رقابت مشخص می‌شود، زیرا شخصیت‌ها و سبک‌های کاری فردی با هم برخورد می‌کنند. این یک مرحله ضروری برای رشد تیم است.' }
        },
        {
          question: { en: 'What is a key aspect of emotional intelligence for a project manager?', fa: 'یک جنبه کلیدی از هوش هیجانی برای یک مدیر پروژه چیست؟' },
          options: [
            { en: 'Having deep technical knowledge', fa: 'داشتن دانش فنی عمیق' },
            { en: 'Being able to understand and manage their own and others\' emotions', fa: 'توانایی درک و مدیریت احساسات خود و دیگران' },
            { en: 'The ability to create complex schedules', fa: 'توانایی ایجاد زمان‌بندی‌های پیچیده' },
            { en: 'Strictly enforcing rules', fa: 'اجرای سختگیرانه قوانین' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Emotional intelligence is crucial for leadership. It involves self-awareness, self-regulation, empathy, and social skills, which are essential for motivating and leading a team.', fa: 'هوش هیجانی برای رهبری بسیار مهم است. این شامل خودآگاهی، خودتنظیمی، همدلی و مهارت‌های اجتماعی است که برای ایجاد انگیزه و رهبری تیم ضروری هستند.' }
        },
        {
          question: { en: 'When a conflict arises within the project team, what is a constructive first step for the project manager?', fa: 'وقتی یک درگیری در تیم پروژه به وجود می‌آید، اولین قدم سازنده برای مدیر پروژه چیست؟' },
          options: [
            { en: 'Ignore the conflict, hoping it will resolve itself', fa: 'نادیده گرفتن درگیری، به امید اینکه خود به خود حل شود' },
            { en: 'Take sides with the more senior team member', fa: 'طرفداری از عضو ارشدتر تیم' },
            { en: 'Listen to all parties to understand the root cause of the issue', fa: 'گوش دادن به همه طرف‌ها برای درک علت ریشه‌ای مسئله' },
            { en: 'Immediately remove one of the members from the team', fa: 'حذف فوری یکی از اعضا از تیم' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Effective conflict resolution begins with understanding the different perspectives and the underlying reasons for the disagreement before facilitating a solution.', fa: 'حل تعارض مؤثر با درک دیدگاه‌های مختلف و دلایل اساسی اختلاف نظر، قبل از تسهیل یک راه‌حل، آغاز می‌شود.' }
        },
        {
          question: { en: 'What is the primary role of a project manager in team development?', fa: 'نقش اصلی یک مدیر پروژه در توسعه تیم چیست؟' },
          options: [
            { en: 'To act as a facilitator and remove impediments', fa: 'عمل کردن به عنوان یک تسهیل‌گر و حذف موانع' },
            { en: 'To do most of the technical work themselves', fa: 'انجام بیشتر کارهای فنی توسط خودشان' },
            { en: 'To command and control every task', fa: 'دستور دادن و کنترل هر وظیفه' },
            { en: 'To focus only on reporting to senior management', fa: 'تمرکز فقط بر گزارش‌دهی به مدیریت ارشد' }
          ],
          correctAnswer: 0,
          explanation: { en: 'In modern project management, especially with servant leadership, the project manager\'s role is to support the team, remove obstacles, and create an environment where they can be successful.', fa: 'در مدیریت پروژه مدرن، به ویژه با رهبری خدمتگزار، نقش مدیر پروژه حمایت از تیم، حذف موانع و ایجاد محیطی است که آنها بتوانند در آن موفق شوند.' }
        }
      ]
    },
    {
      id: 'd3', title: { en: 'Development Approach & Life Cycle', fa: 'رویکرد توسعه و چرخه حیات' }, icon: '🔄',
      proseSummary: {
        en: `The Development Approach and Life Cycle Performance Domain addresses how the project will be structured and executed from beginning to end. It involves making a critical, deliberate choice about the best way to develop the project’s product, service, or result. This choice is not arbitrary; it must be tailored to the specific characteristics of the project, such as the clarity of requirements, the level of uncertainty, and the need for stakeholder feedback.
\n
A development life cycle is the series of phases that a project passes through from its start to its completion. There is a spectrum of life cycles, ranging from highly predictive to highly adaptive, with many variations in between. The selection of the appropriate life cycle is a key tailoring decision that profoundly impacts how the project is planned, managed, and delivered.
\n
Predictive life cycles, often called "waterfall," are characterized by detailed upfront planning of scope, schedule, and cost. The work is executed in a sequential, linear fashion through distinct phases (e.g., requirements, design, build, test, deploy). This approach is best suited for projects where the requirements are well understood and stable, the technology is proven, and the environment is predictable. The goal is to minimize change and control variance from the established baselines.
\n
In contrast, adaptive life cycles, commonly known as "agile," are designed to thrive in environments of high uncertainty and change. In this approach, the final product is developed through a series of short, repeated cycles called iterations or sprints. Each iteration produces a small, usable increment of the product. This allows the team to receive frequent feedback from stakeholders and adapt the plan accordingly. Detailed planning is done for the immediate iteration, while future work is kept in a flexible, prioritized backlog.
\n
Between these two extremes lie other life cycles. An iterative life cycle involves developing the product through a series of repeated cycles that successively add to the functionality of the product. The requirements are often elaborated one iteration at a time. This approach is useful when the overall goal is clear, but the detailed specifications need to be refined as the project progresses.
\n
An incremental life cycle is one in which the deliverable is produced through a series of iterations that successively add functionality within a predetermined time frame. The deliverable contains a set of new functionalities. Each increment is complete and can be used, delivering value to the stakeholders sooner than a predictive approach might.
\n
Agile is often both iterative and incremental. Each sprint (iteration) adds a new, usable piece of functionality (increment) to the product. This combination provides the dual benefits of rapid value delivery and the flexibility to adapt to changing requirements and priorities.
\n
Many projects benefit from a hybrid approach, which combines elements of both predictive and adaptive life cycles. For example, a project might use a predictive approach for the overall hardware design and procurement, where requirements are stable, but use an adaptive approach for the software development component, where user feedback is critical. Tailoring a hybrid model allows the project team to use the most effective methods for different parts of the project.
\n
The choice of life cycle determines the project's cadence—the rhythm of its activities. In a predictive model, the cadence might be defined by major phase-gate reviews. In an adaptive model, the cadence is set by the fixed length of the sprints (e.g., two weeks), creating a steady rhythm of planning, execution, review, and retrospective.
\n
Ultimately, selecting the right development approach and life cycle is about optimizing for value delivery. There is no single "best" approach. An effective project manager and team will analyze their project's unique context—its goals, risks, and environment—and tailor an approach that provides the right balance of control, flexibility, and stakeholder engagement to maximize the chances of success.`,
        fa: `حوزه عملکرد رویکرد توسعه و چرخه حیات به نحوه ساختاردهی و اجرای پروژه از ابتدا تا انتها می‌پردازد. این شامل اتخاذ یک تصمیم حیاتی و آگاهانه در مورد بهترین راه برای توسعه محصول، خدمت یا نتیجه پروژه است. این انتخاب خودسرانه نیست؛ باید متناسب با ویژگی‌های خاص پروژه، مانند وضوح الزامات، سطح عدم قطعیت و نیاز به بازخورد ذینفعان، تنظیم شود.
\n
چرخه حیات توسعه، مجموعه‌ای از فازهایی است که یک پروژه از شروع تا پایان طی می‌کند. طیفی از چرخه‌های حیات وجود دارد که از بسیار پیش‌بینی‌کننده تا بسیار انطباقی متغیر است و تنوعات زیادی در این بین وجود دارد. انتخاب چرخه حیات مناسب یک تصمیم کلیدی متناسب‌سازی است که عمیقاً بر نحوه برنامه‌ریزی، مدیریت و تحویل پروژه تأثیر می‌گذارد.
\n
چرخه‌های حیات پیش‌بینی‌کننده، که اغلب "آبشاری" نامیده می‌شوند، با برنامه‌ریزی دقیق اولیه محدوده، زمان‌بندی و هزینه مشخص می‌شوند. کار به صورت متوالی و خطی در فازهای مجزا (مانند الزامات، طراحی، ساخت، تست، استقرار) اجرا می‌شود. این رویکرد برای پروژه‌هایی مناسب است که الزامات به خوبی درک شده و پایدار هستند، فناوری اثبات شده است و محیط قابل پیش‌بینی است. هدف، به حداقل رساندن تغییر و کنترل انحراف از خطوط مبنای تعیین شده است.
\n
در مقابل، چرخه‌های حیات انطباقی، که معمولاً به عنوان "چابک" شناخته می‌شوند، برای رشد در محیط‌هایی با عدم قطعیت و تغییر زیاد طراحی شده‌اند. در این رویکرد، محصول نهایی از طریق یک سری چرخه‌های کوتاه و تکراری به نام تکرارها یا اسپرینت‌ها توسعه می‌یابد. هر تکرار یک بخش کوچک و قابل استفاده از محصول را تولید می‌کند. این به تیم امکان می‌دهد تا بازخورد مکرر از ذینفعان دریافت کرده و برنامه را بر اساس آن تطبیق دهد. برنامه‌ریزی دقیق برای تکرار فوری انجام می‌شود، در حالی که کارهای آینده در یک بک‌لاگ انعطاف‌پذیر و اولویت‌بندی شده نگهداری می‌شود.
\n
بین این دو افراط، چرخه‌های حیات دیگری قرار دارند. یک چرخه حیات تکراری شامل توسعه محصول از طریق یک سری چرخه‌های تکراری است که به طور متوالی به عملکرد محصول می‌افزایند. الزامات اغلب در هر تکرار تکمیل‌تر می‌شوند. این رویکرد زمانی مفید است که هدف کلی مشخص باشد، اما مشخصات دقیق باید با پیشرفت پروژه اصلاح شوند.
\n
یک چرخه حیات افزایشی، چرخه‌ای است که در آن محصول قابل تحویل از طریق یک سری تکرارها تولید می‌شود که به طور متوالی عملکرد را در یک چارچوب زمانی از پیش تعیین شده اضافه می‌کنند. هر افزایش کامل و قابل استفاده است و ارزش را زودتر از یک رویکرد پیش‌بینی‌کننده به ذینفعان تحویل می‌دهد.
\n
چابک اغلب هم تکراری و هم افزایشی است. هر اسپرینت (تکرار) یک قطعه عملکردی جدید و قابل استفاده (افزایش) را به محصول اضافه می‌کند. این ترکیب مزایای دوگانه تحویل سریع ارزش و انعطاف‌پذیری برای انطباق با الزامات و اولویت‌های در حال تغییر را فراهم می‌کند.
\n
بسیاری از پروژه‌ها از یک رویکرد ترکیبی بهره می‌برند که عناصر چرخه‌های حیات پیش‌بینی‌کننده و انطباقی را ترکیب می‌کند. به عنوان مثال، یک پروژه ممکن است از یک رویکرد پیش‌بینی‌کننده برای طراحی و تدارکات کلی سخت‌افزار استفاده کند، جایی که الزامات پایدار هستند، اما از یک رویکرد انطباقی برای جزء توسعه نرم‌افزار استفاده کند، جایی که بازخورد کاربر حیاتی است.
\n
انتخاب چرخه حیات، آهنگ (cadence) پروژه - یعنی ریتم فعالیت‌های آن - را تعیین می‌کند. در یک مدل پیش‌بینی‌کننده، آهنگ ممکن است توسط بازبینی‌های اصلی در انتهای هر فاز تعریف شود. در یک مدل انطباقی، آهنگ توسط طول ثابت اسپرینت‌ها (مثلاً دو هفته) تنظیم می‌شود و یک ریتم ثابت از برنامه‌ریزی، اجرا، بازبینی و بازنگری ایجاد می‌کند.
\n
در نهایت، انتخاب رویکرد توسعه و چرخه حیات مناسب، در مورد بهینه‌سازی برای تحویل ارزش است. هیچ رویکرد "بهترین" واحدی وجود ندارد. یک مدیر پروژه و تیم مؤثر، زمینه منحصر به فرد پروژه خود - اهداف، ریسک‌ها و محیط آن - را تحلیل کرده و رویکردی را متناسب‌سازی می‌کنند که تعادل مناسبی از کنترل، انعطاف‌پذیری و تعامل با ذینفعان را برای به حداکثر رساندن شانس موفقیت فراهم می‌کند.`
      },
      summary: [
        { en: 'Select a development approach (e.g., predictive, adaptive, or hybrid) that is appropriate for the project.', fa: 'یک رویکرد توسعه (مانند پیش‌بینی‌کننده، انطباقی یا ترکیبی) را انتخاب کنید که برای پروژه مناسب باشد.' },
        { en: 'The choice depends on factors like requirement stability, uncertainty, and stakeholder feedback needs.', fa: 'این انتخاب به عواملی مانند پایداری الزامات، عدم قطعیت و نیاز به بازخورد ذینفعان بستگی دارد.' },
        { en: 'Define the project life cycle, which consists of the phases from start to completion.', fa: 'چرخه حیات پروژه را که شامل فازهای از شروع تا تکمیل است، تعریف کنید.' }
      ],
      questions: [
        {
          question: { en: 'A project with very stable requirements and a clear scope is best suited for which life cycle?', fa: 'پروژه‌ای با الزامات بسیار پایدار و محدوده مشخص، برای کدام چرخه حیات مناسب‌تر است؟' },
          options: [
            { en: 'Adaptive', fa: 'انطباقی' },
            { en: 'Predictive (Waterfall)', fa: 'پیش‌بینی‌کننده (آبشاری)' },
            { en: 'Hybrid', fa: 'ترکیبی' },
            { en: 'Chaotic', fa: 'آشوبناک' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Predictive life cycles are designed for environments with low uncertainty, where scope, time, and cost can be planned in detail upfront.', fa: 'چرخه‌های حیات پیش‌بینی‌کننده برای محیط‌هایی با عدم قطعیت پایین طراحی شده‌اند، جایی که محدوده، زمان و هزینه را می‌توان از قبل به تفصیل برنامه‌ریزی کرد.' }
        },
        {
          question: { en: 'What is the main characteristic of an adaptive (Agile) life cycle?', fa: 'ویژگی اصلی یک چرخه حیات انطباقی (چابک) چیست؟' },
          options: [
            { en: 'A single, sequential delivery of the final product', fa: 'یک تحویل واحد و متوالی محصول نهایی' },
            { en: 'Development through short, repeated cycles (iterations)', fa: 'توسعه از طریق چرخه‌های کوتاه و تکراری (تکرارها)' },
            { en: 'Avoiding all planning activities', fa: 'اجتناب از تمام فعالیت‌های برنامه‌ریزی' },
            { en: 'A fixed scope that cannot be changed', fa: 'محدوده ثابت که قابل تغییر نیست' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Adaptive approaches use iterations (sprints) to develop the product incrementally, allowing for frequent feedback and adaptation to change.', fa: 'رویکردهای انطباقی از تکرارها (اسپرینت‌ها) برای توسعه تدریجی محصول استفاده می‌کنند که امکان بازخورد مکرر و انطباق با تغییرات را فراهم می‌کند.' }
        },
        {
          question: { en: 'A hybrid approach to project management means what?', fa: 'یک رویکرد ترکیبی در مدیریت پروژه به چه معناست؟' },
          options: [
            { en: 'Using no specific methodology', fa: 'استفاده نکردن از هیچ متدولوژی خاصی' },
            { en: 'Combining elements of predictive and adaptive approaches', fa: 'ترکیب عناصر رویکردهای پیش‌بینی‌کننده و انطباقی' },
            { en: 'Letting the team decide everything daily', fa: 'اجازه دادن به تیم برای تصمیم‌گیری روزانه در مورد همه چیز' },
            { en: 'Only using predictive approaches', fa: 'فقط استفاده از رویکردهای پیش‌بینی‌کننده' }
          ],
          correctAnswer: 1,
          explanation: { en: 'A hybrid approach tailors the life cycle by blending predictive elements (for stable parts of the project) and adaptive elements (for uncertain parts).', fa: 'یک رویکرد ترکیبی با ترکیب عناصر پیش‌بینی‌کننده (برای بخش‌های پایدار پروژه) و عناصر انطباقی (برای بخش‌های نامشخص)، چرخه حیات را متناسب‌سازی می‌کند.' }
        },
        {
          question: { en: 'What is a product backlog in an Agile context?', fa: 'بک‌لاگ محصول در زمینه چابک چیست؟' },
          options: [
            { en: 'A list of defects found in the product', fa: 'لیستی از نقص‌های پیدا شده در محصول' },
            { en: 'A detailed, unchangeable project plan', fa: 'یک برنامه پروژه دقیق و غیرقابل تغییر' },
            { en: 'A prioritized list of features and requirements for the product', fa: 'یک لیست اولویت‌بندی شده از ویژگی‌ها و الزامات برای محصول' },
            { en: 'The project schedule', fa: 'زمان‌بندی پروژه' }
          ],
          correctAnswer: 2,
          explanation: { en: 'The product backlog is a dynamic, ordered list of everything that might be needed in the product. It is the single source of requirements for any changes to be made to the product.', fa: 'بک‌لاگ محصول یک لیست پویا و مرتب از هر چیزی است که ممکن است در محصول مورد نیاز باشد. این تنها منبع الزامات برای هرگونه تغییری است که باید در محصول ایجاد شود.' }
        },
        {
          question: { en: 'The concept of "cadence" in project management refers to what?', fa: 'مفهوم "آهنگ" (cadence) در مدیریت پروژه به چه چیزی اشاره دارد؟' },
          options: [
            { en: 'The project budget', fa: 'بودجه پروژه' },
            { en: 'The number of team members', fa: 'تعداد اعضای تیم' },
            { en: 'The rhythm and timing of project activities', fa: 'ریتم و زمان‌بندی فعالیت‌های پروژه' },
            { en: 'The final project report', fa: 'گزارش نهایی پروژه' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Cadence refers to the rhythm of events in a project. For example, a two-week sprint cycle in Agile creates a regular cadence for planning, review, and retrospective meetings.', fa: 'آهنگ به ریتم رویدادها در یک پروژه اشاره دارد. به عنوان مثال، یک چرخه اسپرینت دو هفته‌ای در چابک، یک آهنگ منظم برای جلسات برنامه‌ریزی، بازبینی و بازنگری ایجاد می‌کند.' }
        }
      ]
    },
    {
      id: 'd4', title: { en: 'Planning', fa: 'برنامه‌ریزی' }, icon: '📅',
      proseSummary: {
        en: `The Planning Performance Domain focuses on the activities required to organize, elaborate, and coordinate the work of a project. Planning is not a one-time phase but a continuous and iterative process that occurs throughout the project lifecycle. It provides the roadmap that guides the project team from the starting point to the desired future state, ensuring that the project delivers its intended value.
\n
Effective planning begins with a deep understanding of the project's objectives, scope, and constraints. This involves breaking down the total scope of work into smaller, more manageable components, a process known as creating a Work Breakdown Structure (WBS). The WBS provides a foundation for all subsequent planning activities.
\n
Schedule planning is a core component. In predictive (Waterfall) approaches, this involves sequencing activities, estimating their duration, and developing a detailed schedule, often visualized using a Gantt chart. Techniques like the Critical Path Method (CPM) are used to identify the sequence of tasks that determines the project's total duration, helping the team focus on the most critical activities.
\n
In adaptive (Agile) approaches, scheduling is very different. Instead of a detailed upfront schedule, work is organized into a prioritized product backlog. High-level release planning provides a long-term forecast, while detailed planning occurs just-in-time for each short iteration or sprint. The team selects a set of items from the backlog to complete within a sprint, creating a flexible and adaptive schedule.
\n
Cost planning involves estimating the financial resources needed to complete the project. This includes estimating the cost of labor, materials, equipment, and other resources. These estimates are aggregated to form a project budget, which is then used to control costs throughout the project. The budget must be realistic and align with the planned scope and schedule.
\n
Resource planning deals with identifying and acquiring the necessary resources, including human resources (the project team), equipment, and materials. It involves ensuring that the right people with the right skills are available when needed and that physical resources are provisioned effectively.
\n
Quality planning is crucial for ensuring that the project's outputs meet the required standards. This involves defining the quality metrics, specifying the acceptance criteria for deliverables, and planning the quality assurance and quality control activities that will be performed during the project.
\n
Risk planning is another vital function. This involves identifying potential threats and opportunities, analyzing their probability and impact, and developing response strategies. A risk management plan documents how the team will handle uncertainty, helping to minimize negative impacts and maximize positive ones.
\n
Communication planning determines how, when, and to whom project information will be distributed. It identifies the stakeholders' communication needs and establishes a clear plan for status reports, meetings, and other forms of communication to keep everyone aligned and informed.
\n
Procurement planning addresses the need to acquire goods or services from outside the organization. It involves deciding what to procure, identifying potential sellers, and defining the contract types and procurement processes.
\n
Ultimately, all these individual plans are integrated into a comprehensive project management plan. This plan is not a static document; it is a living artifact that is progressively elaborated and updated as the project unfolds and more information becomes available. Good planning provides direction, facilitates communication, reduces uncertainty, and sets the stage for successful execution.`,
        fa: `حوزه عملکرد برنامه‌ریزی بر فعالیت‌های مورد نیاز برای سازماندهی، تشریح و هماهنگی کار یک پروژه تمرکز دارد. برنامه‌ریزی یک فاز یکباره نیست، بلکه یک فرآیند مستمر و تکراری است که در طول چرخه حیات پروژه رخ می‌دهد. این حوزه نقشه راهی را فراهم می‌کند که تیم پروژه را از نقطه شروع به وضعیت آینده مطلوب هدایت کرده و اطمینان می‌دهد که پروژه ارزش مورد نظر خود را تحویل می‌دهد.
\n
برنامه‌ریزی مؤثر با درک عمیق اهداف، محدوده و محدودیت‌های پروژه آغاز می‌شود. این شامل تجزیه کل محدوده کار به اجزای کوچکتر و قابل مدیریت‌تر است، فرآیندی که به عنوان ایجاد ساختار شکست کار (WBS) شناخته می‌شود. WBS پایه‌ای برای تمام فعالیت‌های برنامه‌ریزی بعدی فراهم می‌کند.
\n
برنامه‌ریزی زمان‌بندی یک جزء اصلی است. در رویکردهای پیش‌بینی‌کننده (آبشاری)، این شامل توالی‌بندی فعالیت‌ها، تخمین مدت زمان آنها و توسعه یک زمان‌بندی دقیق است که اغلب با استفاده از نمودار گانت به تصویر کشیده می‌شود. تکنیک‌هایی مانند روش مسیر بحرانی (CPM) برای شناسایی توالی وظایفی که کل مدت زمان پروژه را تعیین می‌کند، استفاده می‌شود و به تیم کمک می‌کند تا بر روی حیاتی‌ترین فعالیت‌ها تمرکز کند.
\n
در رویکردهای انطباقی (چابک)، زمان‌بندی بسیار متفاوت است. به جای یک زمان‌بندی دقیق اولیه، کار در یک بک‌لاگ محصول اولویت‌بندی شده سازماندهی می‌شود. برنامه‌ریزی انتشار در سطح بالا یک پیش‌بینی بلندمدت ارائه می‌دهد، در حالی که برنامه‌ریزی دقیق درست به موقع برای هر تکرار یا اسپرینت کوتاه انجام می‌شود. تیم مجموعه‌ای از آیتم‌ها را از بک‌لاگ برای تکمیل در یک اسپرینت انتخاب می‌کند و یک زمان‌بندی انعطاف‌پذیر و انطباقی ایجاد می‌کند.
\n
برنامه‌ریزی هزینه شامل تخمین منابع مالی مورد نیاز برای تکمیل پروژه است. این شامل تخمین هزینه نیروی کار، مواد، تجهیزات و سایر منابع است. این تخمین‌ها برای تشکیل بودجه پروژه جمع‌آوری می‌شوند که سپس برای کنترل هزینه‌ها در طول پروژه استفاده می‌شود. بودجه باید واقع‌بینانه باشد و با محدوده و زمان‌بندی برنامه‌ریزی شده همسو باشد.
\n
برنامه‌ریزی منابع به شناسایی و کسب منابع لازم، از جمله منابع انسانی (تیم پروژه)، تجهیزات و مواد می‌پردازد. این شامل اطمینان از در دسترس بودن افراد مناسب با مهارت‌های مناسب در زمان نیاز و تأمین مؤثر منابع فیزیکی است.
\n
برنامه‌ریزی کیفیت برای اطمینان از اینکه خروجی‌های پروژه استانداردهای مورد نیاز را برآورده می‌کنند، حیاتی است. این شامل تعریف معیارهای کیفیت، مشخص کردن معیارهای پذیرش برای اقلام قابل تحویل و برنامه‌ریزی فعالیت‌های تضمین کیفیت و کنترل کیفیتی است که در طول پروژه انجام خواهد شد.
\n
برنامه‌ریزی ریسک یکی دیگر از عملکردهای حیاتی است. این شامل شناسایی تهدیدها و فرصت‌های بالقوه، تحلیل احتمال و تأثیر آنها و توسعه استراتژی‌های پاسخ است. یک برنامه مدیریت ریسک مستند می‌کند که تیم چگونه با عدم قطعیت برخورد خواهد کرد و به به حداقل رساندن تأثیرات منفی و به حداکثر رساندن تأثیرات مثبت کمک می‌کند.
\n
برنامه‌ریزی ارتباطات تعیین می‌کند که اطلاعات پروژه چگونه، چه زمانی و به چه کسی توزیع خواهد شد. این نیازهای ارتباطی ذینفعان را شناسایی کرده و یک برنامه روشن برای گزارش‌های وضعیت، جلسات و سایر اشکال ارتباطات برای همسو و مطلع نگه داشتن همه، ایجاد می‌کند.
\n
برنامه‌ریزی تدارکات به نیاز به تهیه کالاها یا خدمات از خارج از سازمان می‌پردازد. این شامل تصمیم‌گیری در مورد اینکه چه چیزی باید تهیه شود، شناسایی فروشندگان بالقوه و تعریف انواع قرارداد و فرآیندهای تدارکات است.
\n
در نهایت، تمام این برنامه‌های فردی در یک برنامه مدیریت پروژه جامع یکپارچه می‌شوند. این برنامه یک سند ایستا نیست؛ این یک مصنوع زنده است که با پیشرفت پروژه و در دسترس قرار گرفتن اطلاعات بیشتر، به تدریج تکمیل و به روز می‌شود. برنامه‌ریزی خوب جهت را فراهم می‌کند، ارتباطات را تسهیل می‌کند، عدم قطعیت را کاهش می‌دهد و زمینه را برای اجرای موفق فراهم می‌کند.`
      },
      summary: [
        { en: 'Planning organizes, elaborates, and coordinates project work.', fa: 'برنامه‌ریزی، کار پروژه را سازماندهی، تشریح و هماهنگ می‌کند.' },
        { en: 'It is a continuous process throughout the project lifecycle.', fa: 'این یک فرآیند مستمر در طول چرخه حیات پروژه است.' },
        { en: 'Planning is tailored based on the chosen development approach (e.g., Waterfall vs. Agile).', fa: 'برنامه‌ریزی بر اساس رویکرد توسعه انتخاب شده (مانند آبشاری در مقابل چابک) متناسب‌سازی می‌شود.' }
      ],
      questions: [
        {
          question: { en: 'What is the primary output of the Planning Performance Domain?', fa: 'خروجی اصلی حوزه عملکرد برنامه‌ریزی چیست؟' },
          options: [
            { en: 'The final product', fa: 'محصول نهایی' },
            { en: 'A project management plan', fa: 'یک برنامه مدیریت پروژه' },
            { en: 'A list of risks', fa: 'لیستی از ریسک‌ها' },
            { en: 'A team charter', fa: 'منشور تیم' }
          ],
          correctAnswer: 1,
          explanation: { en: 'The planning domain consolidates all subsidiary plans (scope, schedule, cost, etc.) into a comprehensive project management plan that guides execution and control.', fa: 'حوزه برنامه‌ریزی تمام برنامه‌های فرعی (محدوده، زمان‌بندی، هزینه و غیره) را در یک برنامه مدیریت پروژه جامع ادغام می‌کند که اجرای و کنترل را هدایت می‌کند.' }
        },
        {
          question: { en: 'In a predictive project, what is the Critical Path?', fa: 'در یک پروژه پیش‌بینی‌کننده، مسیر بحرانی چیست؟' },
          options: [
            { en: 'The most expensive sequence of tasks', fa: 'گران‌ترین توالی وظایف' },
            { en: 'The sequence of tasks with the highest risk', fa: 'توالی وظایف با بالاترین ریسک' },
            { en: 'The shortest sequence of tasks to complete the project', fa: 'کوتاه‌ترین توالی وظایف برای تکمیل پروژه' },
            { en: 'The sequence of tasks that determines the project\'s total duration', fa: 'توالی وظایفی که کل مدت زمان پروژه را تعیین می‌کند' }
          ],
          correctAnswer: 3,
          explanation: { en: 'The Critical Path represents the longest path through the project network diagram, and its length determines the shortest possible project duration. Any delay on the critical path will delay the entire project.', fa: 'مسیر بحرانی نشان‌دهنده طولانی‌ترین مسیر در نمودار شبکه پروژه است و طول آن کوتاه‌ترین مدت زمان ممکن پروژه را تعیین می‌کند. هرگونه تأخیر در مسیر بحرانی، کل پروژه را به تأخیر می‌اندازد.' }
        },
        {
          question: { en: 'What does "progressive elaboration" of the project plan mean?', fa: '"تکمیل تدریجی" برنامه پروژه به چه معناست؟' },
          options: [
            { en: 'The plan is created once and never changed', fa: 'برنامه یک بار ایجاد شده و هرگز تغییر نمی‌کند' },
            { en: 'The plan becomes more detailed as the project evolves', fa: 'برنامه با پیشرفت پروژه، دقیق‌تر می‌شود' },
            { en: 'The plan is created by only one person', fa: 'برنامه فقط توسط یک نفر ایجاد می‌شود' },
            { en: 'The plan is optional for small projects', fa: 'برنامه برای پروژه‌های کوچک اختیاری است' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Progressive elaboration means that the project plan is not static. It is continuously updated and refined as more information becomes available and as the project moves through its lifecycle.', fa: 'تکمیل تدریجی به این معناست که برنامه پروژه ایستا نیست. با در دسترس قرار گرفتن اطلاعات بیشتر و با حرکت پروژه در چرخه حیات خود، به طور مداوم به روز و اصلاح می‌شود.' }
        },
        {
          question: { en: 'A project manager creates a detailed Gantt chart. This activity is most typical of which development approach?', fa: 'یک مدیر پروژه یک نمودار گانت دقیق ایجاد می‌کند. این فعالیت بیشتر مشخصه کدام رویکرد توسعه است؟' },
          options: [
            { en: 'Agile', fa: 'چابک' },
            { en: 'Predictive', fa: 'پیش‌بینی‌کننده' },
            { en: 'Chaotic', fa: 'آشوبناک' },
            { en: 'Hybrid', fa: 'ترکیبی' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Gantt charts are a hallmark of predictive (Waterfall) planning, used to visualize the project schedule, task dependencies, and progress against a baseline.', fa: 'نمودارهای گانت مشخصه اصلی برنامه‌ریزی پیش‌بینی‌کننده (آبشاری) هستند که برای به تصویر کشیدن زمان‌بندی پروژه، وابستگی‌های وظایف و پیشرفت در برابر خط مبنا استفاده می‌شوند.' }
        },
        {
          question: { en: 'What is the primary purpose of a Work Breakdown Structure (WBS)?', fa: 'هدف اصلی ساختار شکست کار (WBS) چیست؟' },
          options: [
            { en: 'To define the project budget', fa: 'برای تعریف بودجه پروژه' },
            { en: 'To identify project risks', fa: 'برای شناسایی ریسک‌های پروژه' },
            { en: 'To decompose the project scope into smaller, manageable work packages', fa: 'برای تجزیه محدوده پروژه به بسته‌های کاری کوچکتر و قابل مدیریت' },
            { en: 'To create a communication plan', fa: 'برای ایجاد یک برنامه ارتباطات' }
          ],
          correctAnswer: 2,
          explanation: { en: 'The WBS is a hierarchical decomposition of the total scope of work to be carried out by the project team. It provides the foundation for estimating, scheduling, and controlling the project.', fa: 'WBS یک تجزیه سلسله مراتبی از کل محدوده کاری است که باید توسط تیم پروژه انجام شود. این ساختار، پایه‌ای برای تخمین، زمان‌بندی و کنترل پروژه فراهم می‌کند.' }
        }
      ]
    },
    {
      id: 'd5', title: { en: 'Project Work', fa: 'کار پروژه' }, icon: '🛠️',
      proseSummary: {
        en: `The Project Work Performance Domain is concerned with the actual execution of the project plan. It involves managing the processes and resources needed to produce the project's deliverables and achieve its objectives. This domain is where the "rubber meets the road" and the plans are turned into tangible outcomes.
\n
A core function of this domain is managing the project team as they perform the planned work. This includes providing clear direction, facilitating communication, and resolving any issues or roadblocks that arise. The project manager must ensure that the team has the necessary resources and environment to be productive and efficient.
\n
Process management is another key aspect. Projects rely on a variety of processes to get work done, from technical processes for creating deliverables to management processes for controlling change. This domain involves ensuring that these processes are followed effectively and are appropriate for the project. In adaptive projects, this might involve facilitating agile ceremonies like daily stand-ups, sprint planning, and retrospectives.
\n
Effective communication is the lifeblood of project work. The project manager is responsible for executing the communications plan, ensuring that stakeholders receive the right information in a timely manner. This includes distributing status reports, conducting progress meetings, and maintaining open lines of communication to address questions and concerns.
\n
Managing procurement is also part of this domain. If the project requires external goods or services, this involves managing the relationship with vendors, monitoring contract performance, and ensuring that the procured items meet the project's requirements. This is critical for controlling costs, schedule, and quality related to external suppliers.
\n
Knowledge management and learning are vital for continuous improvement. As the project team performs the work, they generate valuable information and learn important lessons. The Project Work domain includes activities for capturing this "tacit" knowledge and making it "explicit" through documentation and shared lessons learned. This helps the current project adapt and provides valuable assets for future projects.
\n
Managing project changes is an ongoing activity. As work progresses, changes to scope, schedule, or cost are often necessary. This domain involves implementing the formal change control process, which includes receiving change requests, analyzing their impact, getting them approved, and updating the project plan accordingly. This ensures that changes are managed in a controlled way, preventing "scope creep."
\n
Ensuring the quality of the work is paramount. This involves carrying out the planned quality assurance activities to audit processes and quality control activities to inspect and verify deliverables. The goal is to identify and correct defects as early as possible and ensure that the final outputs are fit for purpose.
\n
Problem-solving is a daily reality in project work. The project manager and team must be adept at identifying problems, analyzing their root causes, and developing effective solutions. This requires a combination of technical knowledge, critical thinking, and collaborative skills.
\n
Ultimately, the Project Work Performance Domain is about orchestrating all the moving parts of the project to create value. It requires a blend of leadership, management, and technical skills to guide the project from planning to delivery, ensuring that the work is done efficiently, effectively, and in alignment with the project's goals.`,
        fa: `حوزه عملکرد کار پروژه به اجرای واقعی برنامه پروژه مربوط می‌شود. این شامل مدیریت فرآیندها و منابع مورد نیاز برای تولید اقلام قابل تحویل پروژه و دستیابی به اهداف آن است. این حوزه جایی است که "عمل" اتفاق می‌افتد و برنامه‌ها به نتایج ملموس تبدیل می‌شوند.
\n
یک عملکرد اصلی این حوزه، مدیریت تیم پروژه در حین انجام کار برنامه‌ریزی شده است. این شامل ارائه جهت‌دهی روشن، تسهیل ارتباطات و حل هرگونه مسئله یا مانعی است که به وجود می‌آید. مدیر پروژه باید اطمینان حاصل کند که تیم منابع و محیط لازم برای بهره‌وری و کارایی را در اختیار دارد.
\n
مدیریت فرآیند یکی دیگر از جنبه‌های کلیدی است. پروژه‌ها برای انجام کار به فرآیندهای مختلفی متکی هستند، از فرآیندهای فنی برای ایجاد اقلام قابل تحویل گرفته تا فرآیندهای مدیریتی برای کنترل تغییر. این حوزه شامل اطمینان از این است که این فرآیندها به طور مؤثر دنبال می‌شوند و برای پروژه مناسب هستند. در پروژه‌های انطباقی، این ممکن است شامل تسهیل مراسم چابک مانند استندآپ‌های روزانه، برنامه‌ریزی اسپرینت و بازنگری‌ها باشد.
\n
ارتباطات مؤثر، خون حیات کار پروژه است. مدیر پروژه مسئول اجرای برنامه ارتباطات است و اطمینان می‌دهد که ذینفعان اطلاعات درست را به موقع دریافت می‌کنند. این شامل توزیع گزارش‌های وضعیت، برگزاری جلسات پیشرفت و حفظ خطوط ارتباطی باز برای پاسخ به سؤالات و نگرانی‌ها است.
\n
مدیریت تدارکات نیز بخشی از این حوزه است. اگر پروژه به کالاها یا خدمات خارجی نیاز داشته باشد، این شامل مدیریت رابطه با فروشندگان، نظارت بر عملکرد قرارداد و اطمینان از اینکه اقلام تهیه شده با الزامات پروژه مطابقت دارند، است. این برای کنترل هزینه‌ها، زمان‌بندی و کیفیت مربوط به تأمین‌کنندگان خارجی حیاتی است.
\n
مدیریت دانش و یادگیری برای بهبود مستمر حیاتی است. همانطور که تیم پروژه کار را انجام می‌دهد، اطلاعات ارزشمندی تولید کرده و درس‌های مهمی می‌آموزد. حوزه عملکرد کار پروژه شامل فعالیت‌هایی برای ثبت این دانش "ضمنی" و تبدیل آن به "صریح" از طریق مستندسازی و درس‌های آموخته شده مشترک است. این به پروژه فعلی کمک می‌کند تا خود را تطبیق دهد و دارایی‌های ارزشمندی برای پروژه‌های آینده فراهم می‌کند.
\n
مدیریت تغییرات پروژه یک فعالیت مداوم است. با پیشرفت کار، تغییرات در محدوده، زمان‌بندی یا هزینه اغلب ضروری است. این حوزه شامل اجرای فرآیند کنترل تغییر رسمی است که شامل دریافت درخواست‌های تغییر، تحلیل تأثیر آنها، دریافت تأییدیه و به روز رسانی برنامه پروژه بر اساس آن است. این اطمینان می‌دهد که تغییرات به صورت کنترل شده مدیریت می‌شوند و از "خزش محدوده" جلوگیری می‌کند.
\n
تضمین کیفیت کار از اهمیت بالایی برخوردار است. این شامل انجام فعالیت‌های برنامه‌ریزی شده تضمین کیفیت برای ممیزی فرآیندها و فعالیت‌های کنترل کیفیت برای بازرسی و تأیید اقلام قابل تحویل است. هدف، شناسایی و اصلاح نقص‌ها در اسرع وقت و اطمینان از مناسب بودن خروجی‌های نهایی برای هدف است.
\n
حل مسئله یک واقعیت روزمره در کار پروژه است. مدیر پروژه و تیم باید در شناسایی مشکلات، تحلیل علل ریشه‌ای آنها و توسعه راه‌حل‌های مؤثر مهارت داشته باشند. این نیازمند ترکیبی از دانش فنی، تفکر انتقادی و مهارت‌های همکاری است.
\n
در نهایت، حوزه عملکرد کار پروژه در مورد هماهنگ کردن تمام قطعات متحرک پروژه برای ایجاد ارزش است. این نیازمند ترکیبی از مهارت‌های رهبری، مدیریتی و فنی برای هدایت پروژه از برنامه‌ریزی تا تحویل است و اطمینان می‌دهد که کار به طور کارآمد، مؤثر و در راستای اهداف پروژه انجام می‌شود.`
      },
      summary: [
        { en: 'Establish and manage processes to execute the project work.', fa: 'فرآیندهایی را برای اجرای کار پروژه ایجاد و مدیریت کنید.' },
        { en: 'This includes managing resources, communication, and procurement.', fa: 'این حوزه شامل مدیریت منابع، ارتباطات و تدارکات است.' },
        { en: 'Focus on producing deliverables while managing changes and ensuring quality.', fa: 'بر تولید اقلام قابل تحویل تمرکز کنید، در حالی که تغییرات را مدیریت کرده و کیفیت را تضمین می‌کنید.' }
      ],
      questions: [
        {
          question: { en: 'The Project Work performance domain is primarily concerned with what?', fa: 'حوزه عملکرد کار پروژه عمدتاً به چه چیزی مربوط می‌شود؟' },
          options: [
            { en: 'Creating the initial project charter', fa: 'ایجاد منشور اولیه پروژه' },
            { en: 'Executing the project plan to create deliverables', fa: 'اجرای برنامه پروژه برای ایجاد اقلام قابل تحویل' },
            { en: 'Closing the project and releasing the team', fa: 'بستن پروژه و آزاد کردن تیم' },
            { en: 'Identifying stakeholders', fa: 'شناسایی ذینفعان' }
          ],
          correctAnswer: 1,
          explanation: { en: 'This domain is all about "doing the work"—that is, carrying out the activities defined in the project management plan to produce the project\'s outputs.', fa: 'این حوزه تماماً در مورد "انجام کار" است - یعنی اجرای فعالیت‌های تعریف شده در برنامه مدیریت پروژه برای تولید خروجی‌های پروژه.' }
        },
        {
          question: { en: 'What is a key activity in managing project knowledge?', fa: 'یک فعالیت کلیدی در مدیریت دانش پروژه چیست؟' },
          options: [
            { en: 'Ignoring past mistakes', fa: 'نادیده گرفتن اشتباهات گذشته' },
            { en: 'Keeping information within a small group', fa: 'نگه داشتن اطلاعات در یک گروه کوچک' },
            { en: 'Capturing lessons learned and sharing them with the team', fa: 'ثبت درس‌های آموخته شده و به اشتراک گذاری آنها با تیم' },
            { en: 'Only using expert judgment', fa: 'فقط استفاده از قضاوت تخصصی' }
          ],
          correctAnswer: 2,
          explanation: { en: 'A key part of project work is learning from experience. Capturing and sharing lessons learned helps the current project improve and provides a valuable knowledge base for future projects.', fa: 'بخش کلیدی کار پروژه، یادگیری از تجربه است. ثبت و به اشتراک گذاری درس‌های آموخته شده به بهبود پروژه فعلی کمک می‌کند و یک پایگاه دانش ارزشمند برای پروژه‌های آینده فراهم می‌آورد.' }
        },
        {
          question: { en: 'A change request has been submitted. What is the appropriate first step according to the change control process?', fa: 'یک درخواست تغییر ارسال شده است. اولین قدم مناسب طبق فرآیند کنترل تغییر چیست؟' },
          options: [
            { en: 'Immediately implement the change', fa: 'فوراً تغییر را اجرا کنید' },
            { en: 'Reject the change without review', fa: 'بدون بررسی، تغییر را رد کنید' },
            { en: 'Analyze the impact of the change on the project objectives', fa: 'تأثیر تغییر را بر اهداف پروژه تحلیل کنید' },
            { en: 'Inform only the project sponsor', fa: 'فقط به اسپانسر پروژه اطلاع دهید' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Any change request must first be analyzed to understand its potential impact on project constraints like scope, schedule, cost, and quality before a decision is made to approve or reject it.', fa: 'هر درخواست تغییری باید ابتدا برای درک تأثیر بالقوه آن بر محدودیت‌های پروژه مانند محدوده، زمان‌بندی، هزینه و کیفیت تحلیل شود، قبل از اینکه تصمیمی برای تأیید یا رد آن گرفته شود.' }
        },
        {
          question: { en: 'Which of the following is an example of a process in the Project Work domain?', fa: 'کدام یک از موارد زیر نمونه‌ای از یک فرآیند در حوزه عملکرد کار پروژه است؟' },
          options: [
            { en: 'Developing the project charter', fa: 'توسعه منشور پروژه' },
            { en: 'Managing vendor relationships', fa: 'مدیریت روابط با فروشندگان' },
            { en: 'Identifying stakeholders', fa: 'شناسایی ذینفعان' },
            { en: 'Estimating costs', fa: 'تخمین هزینه‌ها' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Managing procurement, which includes managing relationships with vendors, is a key process for executing the project plan when external resources are needed.', fa: 'مدیریت تدارکات، که شامل مدیریت روابط با فروشندگان است، یک فرآیند کلیدی برای اجرای برنامه پروژه در صورت نیاز به منابع خارجی است.' }
        },
        {
          question: { en: 'What is "scope creep"?', fa: '"خزش محدوده" چیست؟' },
          options: [
            { en: 'The project finishing ahead of schedule', fa: 'تمام شدن پروژه زودتر از موعد' },
            { en: 'Adding features and functionality without proper change control', fa: 'اضافه کردن ویژگی‌ها و عملکرد بدون کنترل تغییر مناسب' },
            { en: 'Reducing the project scope', fa: 'کاهش محدوده پروژه' },
            { en: 'The project sponsor adding a new requirement', fa: 'اضافه کردن یک نیاز جدید توسط اسپانسر پروژه' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Scope creep refers to the uncontrolled expansion of the product or project scope without adjustments to time, cost, and resources. It is a common reason for project failure and is managed through a formal change control process.', fa: 'خزش محدوده به گسترش کنترل نشده محدوده محصول یا پروژه بدون تنظیم زمان، هزینه و منابع اشاره دارد. این یک دلیل رایج برای شکست پروژه است و از طریق یک فرآیند کنترل تغییر رسمی مدیریت می‌شود.' }
        }
      ]
    },
    {
      id: 'd6', title: { en: 'Delivery', fa: 'تحویل' }, icon: '🚚',
      proseSummary: {
        en: `The Delivery Performance Domain focuses on the activities associated with delivering the project's scope and quality objectives. It's about ensuring that what the project produces aligns with the business case and the benefits that the organization expects to realize. This domain connects the project's work to the ultimate value it is intended to create.
\n
A central concept in this domain is the delivery of value. Projects are undertaken to create value, which can be tangible or intangible. The delivery approach must be structured to maximize this value. In adaptive projects, this often means delivering value incrementally, by releasing working pieces of the product early and often. This allows stakeholders to realize benefits sooner and provide feedback that guides future development.
\n
In predictive projects, value is typically delivered all at once at the end of the project. The focus is on ensuring that the final, complete deliverable meets all the requirements that were defined and agreed upon at the beginning.
\n
Scope management is a critical function within this domain. Scope defines what the project will and will not deliver. The team must work to establish a clear understanding of the project's boundaries. This involves collecting requirements from stakeholders and documenting them in a scope statement and Work Breakdown Structure (WBS).
\n
Once the scope is defined, it must be managed and controlled. This means preventing "scope creep"—the uncontrolled addition of features. The team must ensure that all work being done is aligned with the agreed-upon scope and contributes to the project's objectives. Any changes to the scope must go through a formal change control process.
\n
Quality is inextricably linked to delivery. Delivering a product is not enough; it must be a quality product. This means it must conform to its requirements and be fit for its intended use. The Delivery domain involves executing the quality management plan to ensure that the deliverables meet the specified acceptance criteria.
\n
This involves Quality Assurance (QA) activities, which are process-oriented and focus on preventing defects, and Quality Control (QC) activities, which are product-oriented and focus on identifying defects in the finished deliverables. The goal is to ensure that what is delivered is correct, complete, and acceptable to the customer.
\n
The concept of a "substantially complete" deliverable is important. In some cases, a deliverable may not be 100% perfect, but it may be complete enough to deliver the majority of its intended value. The project team and stakeholders must agree on the definition of "done" for each deliverable, which clarifies the criteria for its completion and acceptance.
\n
Managing the cost of quality is also a key consideration. This involves balancing the cost of preventing defects (e.g., training, good processes) and appraising quality (e.g., testing, inspections) against the cost of failures (e.g., rework, warranty claims). The optimal approach is to invest in prevention to reduce the overall cost of quality.
\n
Ultimately, the Delivery Performance Domain ensures that the project fulfills its promises. It bridges the gap between the project's execution and the realization of benefits by the organization. Successful delivery means providing the right scope at the right level of quality, leading to stakeholder satisfaction and the achievement of the project's strategic goals.`,
        fa: `حوزه عملکرد تحویل بر فعالیت‌های مرتبط با تحویل محدوده و اهداف کیفیت پروژه تمرکز دارد. این حوزه در مورد اطمینان از این است که آنچه پروژه تولید می‌کند با مورد تجاری و منافعی که سازمان انتظار دارد تحقق یابد، همسو است. این حوزه کار پروژه را به ارزش نهایی که برای ایجاد آن در نظر گرفته شده است، متصل می‌کند.
\n
مفهوم اصلی در این حوزه، تحویل ارزش است. پروژه‌ها برای ایجاد ارزش انجام می‌شوند که می‌تواند ملموس یا ناملموس باشد. رویکرد تحویل باید برای به حداکثر رساندن این ارزش ساختاردهی شود. در پروژه‌های انطباقی، این اغلب به معنای تحویل تدریجی ارزش است، با انتشار قطعات کاری محصول به صورت زودهنگام و مکرر. این به ذینفعان امکان می‌دهد تا زودتر از مزایا بهره‌مند شوند و بازخوردی ارائه دهند که توسعه آینده را هدایت می‌کند.
\n
در پروژه‌های پیش‌بینی‌کننده، ارزش معمولاً به یکباره در پایان پروژه تحویل داده می‌شود. تمرکز بر اطمینان از این است که محصول نهایی و کامل، تمام الزاماتی را که در ابتدا تعریف و توافق شده بود، برآورده می‌کند.
\n
مدیریت محدوده یک عملکرد حیاتی در این حوزه است. محدوده تعریف می‌کند که پروژه چه چیزی را تحویل خواهد داد و چه چیزی را نه. تیم باید برای ایجاد درک روشنی از مرزهای پروژه تلاش کند. این شامل جمع‌آوری الزامات از ذینفعان و مستندسازی آنها در یک بیانیه محدوده و ساختار شکست کار (WBS) است.
\n
هنگامی که محدوده تعریف شد، باید مدیریت و کنترل شود. این به معنای جلوگیری از "خزش محدوده" - اضافه شدن کنترل نشده ویژگی‌ها - است. تیم باید اطمینان حاصل کند که تمام کارهای انجام شده با محدوده توافق شده همسو است و به اهداف پروژه کمک می‌کند. هرگونه تغییری در محدوده باید از طریق یک فرآیند کنترل تغییر رسمی انجام شود.
\n
کیفیت به طور جدایی‌ناپذیری با تحویل مرتبط است. تحویل یک محصول کافی نیست؛ باید یک محصول با کیفیت باشد. این بدان معناست که باید با الزامات خود مطابقت داشته باشد و برای استفاده مورد نظر خود مناسب باشد. حوزه تحویل شامل اجرای برنامه مدیریت کیفیت برای اطمینان از اینکه اقلام قابل تحویل با معیارهای پذیرش مشخص شده مطابقت دارند، است.
\n
این شامل فعالیت‌های تضمین کیفیت (QA) است که فرآیندگرا هستند و بر پیشگیری از نقص تمرکز دارند، و فعالیت‌های کنترل کیفیت (QC) که محصول‌گرا هستند و بر شناسایی نقص در اقلام قابل تحویل تمام شده تمرکز دارند. هدف، اطمینان از این است که آنچه تحویل داده می‌شود، صحیح، کامل و برای مشتری قابل قبول است.
\n
مفهوم یک محصول قابل تحویل "اساساً کامل" مهم است. در برخی موارد، یک محصول قابل تحویل ممکن است 100% کامل نباشد، اما ممکن است به اندازه کافی کامل باشد تا اکثریت ارزش مورد نظر خود را تحویل دهد. تیم پروژه و ذینفعان باید بر روی تعریف "انجام شده" برای هر محصول قابل تحویل توافق کنند، که معیارهای تکمیل و پذیرش آن را روشن می‌کند.
\n
مدیریت هزینه کیفیت نیز یک ملاحظه کلیدی است. این شامل ایجاد تعادل بین هزینه پیشگیری از نقص (مانند آموزش، فرآیندهای خوب) و ارزیابی کیفیت (مانند تست، بازرسی) در برابر هزینه شکست‌ها (مانند دوباره‌کاری، ادعاهای گارانتی) است. رویکرد بهینه، سرمایه‌گذاری در پیشگیری برای کاهش هزینه کلی کیفیت است.
\n
در نهایت، حوزه عملکرد تحویل تضمین می‌کند که پروژه به وعده‌های خود عمل می‌کند. این شکاف بین اجرای پروژه و تحقق منافع توسط سازمان را پر می‌کند. تحویل موفق به معنای ارائه محدوده مناسب در سطح کیفیت مناسب است که منجر به رضایت ذینفعان و دستیابی به اهداف استراتژیک پروژه می‌شود.`
      },
      summary: [
        { en: 'Focus on delivering the project scope and meeting quality requirements.', fa: 'بر تحویل محدوده پروژه و برآورده کردن الزامات کیفیت تمرکز کنید.' },
        { en: 'Deliver value incrementally (in adaptive) or at the end (in predictive).', fa: 'ارزش را به صورت تدریجی (در انطباقی) یا در پایان (در پیش‌بینی‌کننده) تحویل دهید.' },
        { en: 'Quality is a key component of delivery, ensuring deliverables are fit for use.', fa: 'کیفیت یک جزء کلیدی تحویل است که اطمینان می‌دهد اقلام قابل تحویل برای استفاده مناسب هستند.' }
      ],
      questions: [
        {
          question: { en: 'The primary focus of the Delivery Performance Domain is on what?', fa: 'تمرکز اصلی حوزه عملکرد تحویل بر چیست؟' },
          options: [
            { en: 'Planning the project schedule', fa: 'برنامه‌ریزی زمان‌بندی پروژه' },
            { en: 'Meeting the scope and quality goals of the project', fa: 'برآورده کردن اهداف محدوده و کیفیت پروژه' },
            { en: 'Managing the project budget', fa: 'مدیریت بودجه پروژه' },
            { en: 'Building the project team', fa: 'ساختن تیم پروژه' }
          ],
          correctAnswer: 1,
          explanation: { en: 'The Delivery domain is centered on ensuring the project produces the deliverables that meet the agreed-upon scope and quality requirements, thereby delivering value.', fa: 'حوزه تحویل بر اطمینان از این متمرکز است که پروژه اقلام قابل تحویلی را تولید می‌کند که با الزامات محدوده و کیفیت توافق شده مطابقت دارند و در نتیجه ارزش را تحویل می‌دهند.' }
        },
        {
          question: { en: 'What is the relationship between Quality and Delivery?', fa: 'رابطه بین کیفیت و تحویل چیست؟' },
          options: [
            { en: 'They are unrelated', fa: 'آنها به هم مرتبط نیستند' },
            { en: 'Delivery is about speed, while quality is about cost', fa: 'تحویل در مورد سرعت است، در حالی که کیفیت در مورد هزینه است' },
            { en: 'Quality is an integral part of a successful delivery', fa: 'کیفیت بخش جدایی‌ناپذیر یک تحویل موفق است' },
            { en: 'Quality is only checked after delivery', fa: 'کیفیت فقط پس از تحویل بررسی می‌شود' }
          ],
          correctAnswer: 2,
          explanation: { en: 'A successful delivery is not just about producing an output; it\'s about producing an output that meets the quality requirements and is fit for purpose. Quality is built into the delivery process.', fa: 'یک تحویل موفق فقط در مورد تولید یک خروجی نیست؛ بلکه در مورد تولید خروجی است که الزامات کیفیت را برآورده کرده و برای هدف مناسب است. کیفیت در فرآیند تحویل گنجانده شده است.' }
        },
        {
          question: { en: 'What is the definition of "Done" in an Agile project?', fa: 'تعریف "انجام شده" (Done) در یک پروژه چابک چیست؟' },
          options: [
            { en: 'When the code is written, but not tested', fa: 'وقتی کد نوشته شده است، اما تست نشده است' },
            { en: 'A shared understanding of the criteria a work item must meet to be considered complete', fa: 'یک درک مشترک از معیارهایی که یک آیتم کاری باید برآورده کند تا کامل در نظر گرفته شود' },
            { en: 'When the project manager says it is done', fa: 'وقتی مدیر پروژه می‌گوید انجام شده است' },
            { en: 'When the budget is spent', fa: 'وقتی بودجه تمام شده است' }
          ],
          correctAnswer: 1,
          explanation: { en: 'The Definition of Done is a formal, agreed-upon checklist of criteria that a user story or increment must satisfy to be considered complete and potentially shippable.', fa: 'تعریف "انجام شده" یک چک لیست رسمی و توافق شده از معیارهایی است که یک داستان کاربر یا افزایش باید برآورده کند تا کامل و به طور بالقوه قابل تحویل در نظر گرفته شود.' }
        },
        {
          question: { en: 'Which of the following describes the cost of nonconformance to quality?', fa: 'کدام یک از موارد زیر هزینه عدم انطباق با کیفیت را توصیف می‌کند؟' },
          options: [
            { en: 'Cost of training the team', fa: 'هزینه آموزش تیم' },
            { en: 'Cost of testing and inspections', fa: 'هزینه تست و بازرسی' },
            { en: 'Cost of rework and warranty claims', fa: 'هزینه دوباره‌کاری و ادعاهای گارانتی' },
            { en: 'Cost of quality planning', fa: 'هزینه برنامه‌ریزی کیفیت' }
          ],
          correctAnswer: 2,
          explanation: { en: 'The cost of nonconformance, or cost of failure, includes all costs incurred because of defects, such as rework, scrap, and warranty costs. The other options are costs of conformance (prevention and appraisal costs).', fa: 'هزینه عدم انطباق، یا هزینه شکست، شامل تمام هزینه‌هایی است که به دلیل نقص‌ها متحمل می‌شود، مانند دوباره‌کاری، ضایعات و هزینه‌های گارانتی. گزینه‌های دیگر هزینه‌های انطباق (هزینه‌های پیشگیری و ارزیابی) هستند.' }
        },
        {
          question: { en: 'Incremental delivery of value is a key characteristic of which approach?', fa: 'تحویل تدریجی ارزش، ویژگی کلیدی کدام رویکرد است؟' },
          options: [
            { en: 'Predictive', fa: 'پیش‌بینی‌کننده' },
            { en: 'Bureaucratic', fa: 'بوروکراتیک' },
            { en: 'Adaptive (Agile)', fa: 'انطباقی (چابک)' },
            { en: 'Top-down', fa: 'از بالا به پایین' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Adaptive approaches focus on delivering working increments of the product in short cycles, allowing stakeholders to receive value early and provide feedback.', fa: 'رویکردهای انطباقی بر تحویل افزایش‌های کاری محصول در چرخه‌های کوتاه تمرکز دارند و به ذینفعان امکان می‌دهند تا ارزش را زودتر دریافت کرده و بازخورد ارائه دهند.' }
        }
      ]
    },
    {
      id: 'd7', title: { en: 'Measurement', fa: 'اندازه‌گیری' }, icon: '📊',
      proseSummary: {
        en: `The Measurement Performance Domain involves the activities used to assess project performance and take appropriate actions to maintain it on track. It is about turning project data into information that can be used for effective decision-making. Effective measurement answers critical questions like, "Where are we now?" and "Where are we headed?"
\n
The foundation of measurement is establishing baselines. Baselines are the approved versions of the scope, schedule, and cost plans, against which project performance is measured and managed. Any deviation from these baselines is called a variance, and analyzing these variances is a key activity in this domain.
\n
Key Performance Indicators (KPIs) are crucial for tracking progress. KPIs are specific, measurable metrics that indicate how well the project is performing against its objectives. Examples include schedule variance, cost variance, number of defects, and stakeholder satisfaction scores. The team must select the right KPIs that provide meaningful insights into project health.
\n
One of the most powerful techniques for integrated performance measurement is Earned Value Management (EVM). EVM combines scope, schedule, and cost measurements into a single, integrated system. It relies on three key metrics: Planned Value (PV), which is the budgeted cost of work scheduled; Earned Value (EV), which is the budgeted cost of work performed; and Actual Cost (AC), which is the actual cost of work performed.
\n
From these three values, critical performance indices are calculated. The Schedule Performance Index (SPI = EV / PV) measures scheduling efficiency. An SPI less than 1.0 indicates the project is behind schedule. The Cost Performance Index (CPI = EV / AC) measures cost efficiency. A CPI less than 1.0 indicates the project is over budget. These indices provide a clear, objective assessment of performance.
\n
EVM also provides forecasting capabilities. The Estimate at Completion (EAC) is a forecast of the total project cost based on current performance. For example, a common formula is EAC = BAC / CPI, where BAC is the Budget at Completion. This helps the project manager predict future outcomes and take corrective action if necessary.
\n
In Agile projects, other measurement tools are common. Burndown charts track the amount of work remaining in a sprint or release, providing a visual representation of progress. Burnup charts show the amount of work completed over time against the total scope, which is useful for tracking progress and scope changes. Velocity is a measure of the amount of work a team can complete in an iteration, and it is used for future planning.
\n
Measurement is not just about collecting data; it's about presenting it in a way that is easy to understand. Dashboards and status reports use visualizations like charts and graphs to communicate performance to stakeholders clearly and concisely. The goal is to provide timely and accurate information that facilitates discussion and decision-making.
\n
A trend analysis, which looks at performance over time, can reveal patterns and predict future performance. For example, a consistently declining CPI might indicate a systemic cost control issue that needs to be addressed.
\n
Ultimately, the Measurement domain provides the feedback loop for project control. By measuring performance against the plan, the project team can identify deviations, understand their causes, and implement corrective or preventive actions to bring the project back in line with its objectives. It transforms project management from a reactive to a proactive discipline.`,
        fa: `حوزه عملکرد اندازه‌گیری شامل فعالیت‌هایی است که برای ارزیابی عملکرد پروژه و انجام اقدامات مناسب برای نگه داشتن آن در مسیر صحیح استفاده می‌شود. این حوزه در مورد تبدیل داده‌های پروژه به اطلاعاتی است که می‌توان برای تصمیم‌گیری مؤثر استفاده کرد. اندازه‌گیری مؤثر به سؤالات حیاتی مانند "ما اکنون کجا هستیم؟" و "به کجا می‌رویم؟" پاسخ می‌دهد.
\n
پایه و اساس اندازه‌گیری، ایجاد خطوط مبنا است. خطوط مبنا نسخه‌های تأیید شده برنامه‌های محدوده، زمان‌بندی و هزینه هستند که عملکرد پروژه در برابر آنها اندازه‌گیری و مدیریت می‌شود. هرگونه انحراف از این خطوط مبنا، واریانس نامیده می‌شود و تحلیل این واریانس‌ها یک فعالیت کلیدی در این حوزه است.
\n
شاخص‌های کلیدی عملکرد (KPIs) برای ردیابی پیشرفت حیاتی هستند. KPIs معیارهای مشخص و قابل اندازه‌گیری هستند که نشان می‌دهند پروژه چقدر خوب در برابر اهداف خود عمل می‌کند. نمونه‌ها شامل واریانس زمان‌بندی، واریانس هزینه، تعداد نقص‌ها و نمرات رضایت ذینفعان است. تیم باید KPIs مناسبی را انتخاب کند که بینش‌های معناداری در مورد سلامت پروژه ارائه دهد.
\n
یکی از قدرتمندترین تکنیک‌ها برای اندازه‌گیری عملکرد یکپارچه، مدیریت ارزش کسب شده (EVM) است. EVM اندازه‌گیری‌های محدوده، زمان‌بندی و هزینه را در یک سیستم واحد و یکپارچه ترکیب می‌کند. این تکنیک بر سه معیار کلیدی متکی است: ارزش برنامه‌ریزی شده (PV)، که هزینه بودجه‌بندی شده کار برنامه‌ریزی شده است؛ ارزش کسب شده (EV)، که هزینه بودجه‌بندی شده کار انجام شده است؛ و هزینه واقعی (AC)، که هزینه واقعی کار انجام شده است.
\n
از این سه مقدار، شاخص‌های عملکرد حیاتی محاسبه می‌شوند. شاخص عملکرد زمان‌بندی (SPI = EV / PV) کارایی زمان‌بندی را اندازه‌گیری می‌کند. SPI کمتر از 1.0 نشان می‌دهد که پروژه از برنامه عقب است. شاخص عملکرد هزینه (CPI = EV / AC) کارایی هزینه را اندازه‌گیری می‌کند. CPI کمتر از 1.0 نشان می‌دهد که پروژه بیش از بودجه است. این شاخص‌ها یک ارزیابی روشن و عینی از عملکرد ارائه می‌دهند.
\n
EVM همچنین قابلیت‌های پیش‌بینی را فراهم می‌کند. برآورد در زمان تکمیل (EAC) پیش‌بینی کل هزینه پروژه بر اساس عملکرد فعلی است. به عنوان مثال، یک فرمول رایج EAC = BAC / CPI است، که در آن BAC بودجه در زمان تکمیل است. این به مدیر پروژه کمک می‌کند تا نتایج آینده را پیش‌بینی کرده و در صورت لزوم اقدامات اصلاحی انجام دهد.
\n
در پروژه‌های چابک، ابزارهای اندازه‌گیری دیگری رایج هستند. نمودارهای فروسوز (Burndown) میزان کار باقی‌مانده در یک اسپرینت یا انتشار را ردیابی می‌کنند و یک نمایش بصری از پیشرفت ارائه می‌دهند. نمودارهای فراسوز (Burnup) میزان کار تکمیل شده را در طول زمان در برابر کل محدوده نشان می‌دهند که برای ردیابی پیشرفت و تغییرات محدوده مفید است. سرعت (Velocity) معیاری از میزان کاری است که یک تیم می‌تواند در یک تکرار تکمیل کند و برای برنامه‌ریزی آینده استفاده می‌شود.
\n
اندازه‌گیری فقط در مورد جمع‌آوری داده‌ها نیست؛ بلکه در مورد ارائه آن به روشی است که به راحتی قابل درک باشد. داشبوردها و گزارش‌های وضعیت از تجسم‌هایی مانند نمودارها و گراف‌ها برای برقراری ارتباط واضح و مختصر عملکرد به ذینفعان استفاده می‌کنند. هدف، ارائه اطلاعات به موقع و دقیق است که بحث و تصمیم‌گیری را تسهیل می‌کند.
\n
تحلیل روند، که به عملکرد در طول زمان نگاه می‌کند، می‌تواند الگوها را آشکار کرده و عملکرد آینده را پیش‌بینی کند. به عنوان مثال، یک CPI که به طور مداوم در حال کاهش است ممکن است نشان‌دهنده یک مسئله سیستماتیک کنترل هزینه باشد که باید به آن رسیدگی شود.
\n
در نهایت، حوزه عملکرد اندازه‌گیری حلقه بازخورد را برای کنترل پروژه فراهم می‌کند. با اندازه‌گیری عملکرد در برابر برنامه، تیم پروژه می‌تواند انحرافات را شناسایی کند، علل آنها را درک کند و اقدامات اصلاحی یا پیشگیرانه را برای بازگرداندن پروژه به مسیر اهداف خود اجرا کند. این، مدیریت پروژه را از یک رشته واکنشی به یک رشته فعالانه تبدیل می‌کند.`
      },
      summary: [
        { en: 'Assess project performance using reliable data.', fa: 'عملکرد پروژه را با استفاده از داده‌های قابل اعتماد ارزیابی کنید.' },
        { en: 'Track key metrics like scope, schedule, cost, and quality against baselines.', fa: 'معیارهای کلیدی مانند محدوده، زمان‌بندی، هزینه و کیفیت را در برابر خطوط مبنا ردیابی کنید.' },
        { en: 'Use techniques like Earned Value Management (EVM) to forecast future performance.', fa: 'از تکنیک‌هایی مانند مدیریت ارزش کسب شده (EVM) برای پیش‌بینی عملکرد آینده استفاده کنید.' }
      ],
      questions: [
        {
          question: { en: 'What is the purpose of establishing a project baseline?', fa: 'هدف از ایجاد یک خط مبنای پروژه چیست؟' },
          options: [
            { en: 'To have a fixed plan that can never change', fa: 'داشتن یک برنامه ثابت که هرگز نمی‌تواند تغییر کند' },
            { en: 'To create a point of comparison for measuring performance', fa: 'ایجاد یک نقطه مرجع برای مقایسه و اندازه‌گیری عملکرد' },
            { en: 'To identify all project stakeholders', fa: 'شناسایی تمام ذینفعان پروژه' },
            { en: 'To finalize the project team', fa: 'نهایی کردن تیم پروژه' }
          ],
          correctAnswer: 1,
          explanation: { en: 'A baseline (e.g., for scope, schedule, or cost) is the approved version of the plan, which is used as a reference point to measure actual performance against.', fa: 'یک خط مبنا (مثلاً برای محدوده، زمان‌بندی یا هزینه) نسخه تأیید شده برنامه است که به عنوان یک نقطه مرجع برای اندازه‌گیری عملکرد واقعی در برابر آن استفاده می‌شود.' }
        },
        {
          question: { en: 'A project has a Cost Performance Index (CPI) of 0.8. What does this indicate?', fa: 'یک پروژه دارای شاخص عملکرد هزینه (CPI) برابر 0.8 است. این نشان‌دهنده چیست؟' },
          options: [
            { en: 'The project is over budget', fa: 'پروژه بیش از بودجه است' },
            { en: 'The project is under budget', fa: 'پروژه کمتر از بودجه است' },
            { en: 'The project is exactly on budget', fa: 'پروژه دقیقاً طبق بودجه است' },
            { en: 'The project is ahead of schedule', fa: 'پروژه از برنامه جلوتر است' }
          ],
          correctAnswer: 0,
          explanation: { en: 'A CPI less than 1.0 means the project is getting less value for the money spent than planned. In this case, for every dollar spent, the project is only earning 80 cents of planned value, so it is over budget.', fa: 'CPI کمتر از 1.0 به این معناست که پروژه به ازای پول خرج شده، ارزش کمتری از آنچه برنامه‌ریزی شده بود به دست می‌آورد. در این مورد، به ازای هر دلار هزینه، پروژه فقط 80 سنت ارزش برنامه‌ریزی شده کسب می‌کند، بنابراین بیش از بودجه است.' }
        },
        {
          question: { en: 'What does "Planned Value" (PV) in EVM represent?', fa: '"ارزش برنامه‌ریزی شده" (PV) در EVM نشان‌دهنده چیست؟' },
          options: [
            { en: 'The actual cost incurred for the work performed', fa: 'هزینه واقعی متحمل شده برای کار انجام شده' },
            { en: 'The value of the work actually completed', fa: 'ارزش کار واقعاً تکمیل شده' },
            { en: 'The authorized budget assigned to the scheduled work', fa: 'بودجه مجاز تخصیص داده شده به کار برنامه‌ریزی شده' },
            { en: 'The total budget of the project', fa: 'کل بودجه پروژه' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Planned Value (PV) is the budgeted cost for the work that was scheduled to be completed by a specific point in time. It represents the "plan".', fa: 'ارزش برنامه‌ریزی شده (PV) هزینه بودجه‌بندی شده برای کاری است که قرار بود تا یک نقطه زمانی مشخص تکمیل شود. این نشان‌دهنده "برنامه" است.' }
        },
        {
          question: { en: 'What is a "burndown chart" used for in an Agile project?', fa: 'یک "نمودار فروسوز" (burndown chart) در یک پروژه چابک برای چه چیزی استفاده می‌شود؟' },
          options: [
            { en: 'To track the total cost of the project', fa: 'برای ردیابی کل هزینه پروژه' },
            { en: 'To show the remaining work over time', fa: 'برای نشان دادن کار باقی‌مانده در طول زمان' },
            { en: 'To list all project stakeholders', fa: 'برای لیست کردن تمام ذینفعان پروژه' },
            { en: 'To document project risks', fa: 'برای مستندسازی ریسک‌های پروژه' }
          ],
          correctAnswer: 1,
          explanation: { en: 'A burndown chart is a visual tool that shows the amount of work remaining in a sprint or release. The vertical axis represents work (e.g., in story points) and the horizontal axis represents time.', fa: 'نمودار فروسوز یک ابزار بصری است که میزان کار باقی‌مانده در یک اسپرینت یا انتشار را نشان می‌دهد. محور عمودی نشان‌دهنده کار (مثلاً در امتیاز داستانی) و محور افقی نشان‌دهنده زمان است.' }
        },
        {
          question: { en: 'If a project\'s SPI is 1.2, what does it mean?', fa: 'اگر SPI یک پروژه 1.2 باشد، به چه معناست؟' },
          options: [
            { en: 'The project is 20% behind schedule', fa: 'پروژه 20% از برنامه عقب است' },
            { en: 'The project is 20% over budget', fa: 'پروژه 20% بیش از بودجه است' },
            { en: 'The project is 20% ahead of schedule', fa: 'پروژه 20% از برنامه جلوتر است' },
            { en: 'The project is 20% under budget', fa: 'پروژه 20% کمتر از بودجه است' }
          ],
          correctAnswer: 2,
          explanation: { en: 'An SPI greater than 1.0 indicates that the project is performing work more efficiently than planned. An SPI of 1.2 means the project has completed 20% more work than was scheduled for the period.', fa: 'SPI بزرگتر از 1.0 نشان می‌دهد که پروژه کار را کارآمدتر از آنچه برنامه‌ریزی شده بود، انجام می‌دهد. SPI برابر با 1.2 به این معناست که پروژه 20% کار بیشتری از آنچه برای دوره برنامه‌ریزی شده بود، تکمیل کرده است.' }
        }
      ]
    },
    {
      id: 'd8', title: { en: 'Uncertainty', fa: 'عدم قطعیت' }, icon: '❓',
      proseSummary: {
        en: `The Uncertainty Performance Domain addresses the reality that all projects are subject to uncertainty. This domain encompasses the activities required to navigate the full spectrum of uncertainty, from individual risks to systemic ambiguity. A proactive and comprehensive approach to uncertainty is a hallmark of a mature project management practice.
\n
Uncertainty can be broken down into several components. One major component is risk, which is an uncertain event that, if it occurs, has a positive (opportunity) or negative (threat) effect on objectives. This domain involves the systematic process of risk management: identifying, analyzing, planning responses for, implementing, and monitoring risks.
\n
For threats, response strategies include avoidance (changing the plan to eliminate the threat), mitigation (reducing the probability or impact), transfer (shifting the impact to a third party, e.g., through insurance), and acceptance. For opportunities, strategies include exploitation (ensuring the opportunity is realized), enhancement (increasing the probability or impact), sharing (allocating ownership to a third party best able to capture it), and acceptance.
\n
However, uncertainty is broader than just individual risks. It also includes ambiguity, which is a lack of clarity or understanding. This can manifest as ambiguous requirements, unclear goals, or complex stakeholder relationships. Dealing with ambiguity requires different strategies than dealing with risk. It often involves iterative approaches, gathering more information, building prototypes, or running experiments to increase clarity over time.
\n
Volatility is another aspect of uncertainty, referring to the potential for rapid and unpredictable change. Projects in volatile environments, such as fast-moving technology markets, must be highly adaptable. Building resilience into the project—the ability to absorb shocks and recover quickly—is a key strategy for dealing with volatility.
\n
The term VUCA (Volatility, Uncertainty, Complexity, Ambiguity) is often used to describe the challenging environment of modern projects. This domain is about equipping the project team with the mindset and tools to operate effectively in such an environment. This means moving away from a desire for perfect prediction and control and embracing adaptability and learning.
\n
A key activity in this domain is building a risk-aware culture. This is an environment where team members feel safe to identify and discuss potential risks and uncertainties without fear of blame. It encourages everyone to think proactively about what might go wrong—or right—and to contribute to response planning.
\n
Contingency and management reserves are practical tools for dealing with uncertainty. Contingency reserves are funds or time set aside to deal with with identified risks ("known unknowns"). Management reserves are budgeted for to handle unforeseen work that is within the scope of the project, addressing "unknown unknowns."
\n
Regularly reviewing the project's uncertainty landscape is critical. The team should periodically revisit risk registers and reassess the project's exposure to ambiguity and volatility. As the project progresses, some uncertainties will be resolved, while new ones will emerge.
\n
Ultimately, the Uncertainty Performance Domain is about making the project more resilient and robust. By systematically identifying, analyzing, and planning for the full range of uncertainties, the project team can reduce the likelihood of negative surprises, increase the chances of capitalizing on opportunities, and steer the project to a successful conclusion even in a turbulent environment.`,
        fa: `حوزه عملکرد عدم قطعیت به این واقعیت می‌پردازد که همه پروژه‌ها در معرض عدم قطعیت هستند. این حوزه شامل فعالیت‌های مورد نیاز برای پیمایش در طیف کامل عدم قطعیت، از ریسک‌های فردی گرفته تا ابهام سیستمیک است. یک رویکرد فعالانه و جامع به عدم قطعیت، مشخصه یک عمل مدیریت پروژه بالغ است.
\n
عدم قطعیت را می‌توان به چندین جزء تقسیم کرد. یک جزء اصلی، ریسک است، که یک رویداد نامشخص است که در صورت وقوع، تأثیر مثبت (فرصت) یا منفی (تهدید) بر اهداف دارد. این حوزه شامل فرآیند سیستماتیک مدیریت ریسک است: شناسایی، تحلیل، برنامه‌ریزی پاسخ، اجرا و نظارت بر ریسک‌ها.
\n
برای تهدیدها، استراتژی‌های پاسخ شامل اجتناب (تغییر برنامه برای حذف تهدید)، کاهش (کاهش احتمال یا تأثیر)، انتقال (انتقال تأثیر به شخص ثالث، به عنوان مثال، از طریق بیمه) و پذیرش است. برای فرصت‌ها، استراتژی‌ها شامل بهره‌برداری (اطمینان از تحقق فرصت)، افزایش (افزایش احتمال یا تأثیر)، اشتراک (تخصیص مالکیت به شخص ثالثی که به بهترین وجه قادر به تصاحب آن است) و پذیرش است.
\n
با این حال، عدم قطعیت گسترده‌تر از فقط ریسک‌های فردی است. این همچنین شامل ابهام است که عدم وضوح یا درک است. این می‌تواند به صورت الزامات مبهم، اهداف نامشخص یا روابط پیچیده ذینفعان ظاهر شود. برخورد با ابهام نیازمند استراتژی‌های متفاوتی نسبت به برخورد با ریسک است. این اغلب شامل رویکردهای تکراری، جمع‌آوری اطلاعات بیشتر، ساخت نمونه‌های اولیه یا اجرای آزمایش‌ها برای افزایش وضوح در طول زمان است.
\n
نوسان یکی دیگر از جنبه‌های عدم قطعیت است که به پتانسیل تغییر سریع و غیرقابل پیش‌بینی اشاره دارد. پروژه‌ها در محیط‌های نوسانی، مانند بازارهای فناوری با حرکت سریع، باید بسیار انطباق‌پذیر باشند. ایجاد تاب‌آوری در پروژه - توانایی جذب شوک‌ها و بازیابی سریع - یک استراتژی کلیدی برای مقابله با نوسان است.
\n
اصطلاح VUCA (نوسان، عدم قطعیت، پیچیدگی، ابهام) اغلب برای توصیف محیط چالش برانگیز پروژه‌های مدرن استفاده می‌شود. این حوزه در مورد مجهز کردن تیم پروژه به ذهنیت و ابزارهایی برای عملکرد مؤثر در چنین محیطی است. این به معنای دور شدن از تمایل به پیش‌بینی و کنترل کامل و در آغوش گرفتن انطباق‌پذیری و یادگیری است.
\n
یک فعالیت کلیدی در این حوزه، ایجاد یک فرهنگ آگاه از ریسک است. این محیطی است که در آن اعضای تیم احساس امنیت می‌کنند تا ریسک‌ها و عدم قطعیت‌های بالقوه را بدون ترس از سرزنش شناسایی و مورد بحث قرار دهند. این همه را تشویق می‌کند تا به طور فعال در مورد آنچه ممکن است اشتباه پیش برود - یا درست - فکر کنند و در برنامه‌ریزی پاسخ مشارکت کنند.
\n
ذخایر احتیاطی و مدیریتی ابزارهای عملی برای مقابله با عدم قطعیت هستند. ذخایر احتیاطی، بودجه یا زمانی هستند که برای مقابله با ریسک‌های شناسایی شده ("نادانسته‌های شناخته شده") کنار گذاشته می‌شوند. ذخایر مدیریتی برای رسیدگی به کارهای پیش‌بینی نشده‌ای که در محدوده پروژه هستند، بودجه‌بندی می‌شوند و به "نادانسته‌های ناشناخته" می‌پردازند.
\n
بازبینی منظم چشم‌انداز عدم قطعیت پروژه حیاتی است. تیم باید به طور دوره‌ای به ثبت‌های ریسک مراجعه کرده و مواجهه پروژه با ابهام و نوسان را دوباره ارزیابی کند. با پیشرفت پروژه، برخی از عدم قطعیت‌ها برطرف شده و عدم قطعیت‌های جدیدی پدیدار می‌شوند.
\n
در نهایت، حوزه عملکرد عدم قطعیت در مورد مقاوم‌تر و استوارتر کردن پروژه است. با شناسایی، تحلیل و برنامه‌ریزی سیستماتیک برای طیف کامل عدم قطعیت‌ها، تیم پروژه می‌تواند احتمال غافلگیری‌های منفی را کاهش دهد، شانس بهره‌برداری از فرصت‌ها را افزایش دهد و پروژه را حتی در یک محیط متلاطم به یک نتیجه موفق هدایت کند.`
      },
      summary: [
        { en: 'Navigate the full range of project uncertainties, including risks, ambiguity, and volatility.', fa: 'در طیف کامل عدم قطعیت‌های پروژه، از جمله ریسک‌ها، ابهام و نوسانات، کاوش کنید.' },
        { en: 'Employ a proactive and systematic risk management process.', fa: 'یک فرآیند مدیریت ریسک فعالانه و سیستماتیک را به کار بگیرید.' },
        { en: 'Build a resilient project that can adapt to change and recover from setbacks.', fa: 'یک پروژه تاب‌آور بسازید که بتواند با تغییرات سازگار شده و از شکست‌ها بهبود یابد.' }
      ],
      questions: [
        {
          question: { en: 'What is the main difference between a risk and an issue?', fa: 'تفاوت اصلی بین یک ریسک و یک مسئله چیست؟' },
          options: [
            { en: 'There is no difference', fa: 'هیچ تفاوتی ندارند' },
            { en: 'A risk is a future event, while an issue has already occurred', fa: 'ریسک یک رویداد آینده است، در حالی که یک مسئله قبلاً رخ داده است' },
            { en: 'A risk is always negative, while an issue can be positive', fa: 'ریسک همیشه منفی است، در حالی که یک مسئله می‌تواند مثبت باشد' },
            { en: 'Issues are managed by the team, risks are managed by the sponsor', fa: 'مسائل توسط تیم مدیریت می‌شوند، ریسک‌ها توسط اسپانسر' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Risk management is proactive, dealing with potential future events. Issue management is reactive, dealing with problems that are currently affecting the project.', fa: 'مدیریت ریسک فعالانه است و با رویدادهای بالقوه آینده سر و کار دارد. مدیریت مسئله واکنشی است و با مشکلاتی که در حال حاضر بر پروژه تأثیر می‌گذارند، سر و کار دارد.' }
        },
        {
          question: { en: 'A project team buys insurance for a key piece of equipment. This is an example of which risk response strategy?', fa: 'یک تیم پروژه برای یک قطعه کلیدی از تجهیزات بیمه می‌خرد. این نمونه‌ای از کدام استراتژی پاسخ به ریسک است؟' },
          options: [
            { en: 'Avoid', fa: 'اجتناب' },
            { en: 'Mitigate', fa: 'کاهش' },
            { en: 'Transfer', fa: 'انتقال' },
            { en: 'Accept', fa: 'پذیرش' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Transferring a risk involves shifting the financial impact of a threat to a third party. Insurance is a classic example of risk transfer.', fa: 'انتقال یک ریسک شامل انتقال تأثیر مالی یک تهدید به یک شخص ثالث است. بیمه یک مثال کلاسیک از انتقال ریسک است.' }
        },
        {
          question: { en: 'What is the best way to handle ambiguity in project requirements?', fa: 'بهترین راه برای رسیدگی به ابهام در الزامات پروژه چیست؟' },
          options: [
            { en: 'Ignore the ambiguity and hope for the best', fa: 'ابهام را نادیده بگیرید و به بهترین‌ها امیدوار باشید' },
            { en: 'Use an iterative approach with prototypes to clarify requirements', fa: 'استفاده از یک رویکرد تکراری با نمونه‌های اولیه برای روشن کردن الزامات' },
            { en: 'Create a very detailed, fixed plan upfront', fa: 'ایجاد یک برنامه بسیار دقیق و ثابت از قبل' },
            { en: 'Ask the project sponsor to make a final decision immediately', fa: 'از اسپانسر پروژه بخواهید فوراً یک تصمیم نهایی بگیرد' }
          ],
          correctAnswer: 1,
          explanation: { en: 'Ambiguity is best resolved by learning. Iterative cycles, prototyping, and experimentation are effective ways to gain clarity and reduce ambiguity over time.', fa: 'ابهام به بهترین وجه با یادگیری حل می‌شود. چرخه‌های تکراری، نمونه‌سازی اولیه و آزمایش، راه‌های مؤثری برای به دست آوردن وضوح و کاهش ابهام در طول زمان هستند.' }
        },
        {
          question: { en: 'What is a contingency reserve?', fa: 'ذخیره احتیاطی چیست؟' },
          options: [
            { en: 'The total project budget', fa: 'کل بودجه پروژه' },
            { en: 'Money for changes requested by the customer', fa: 'پول برای تغییرات درخواستی توسط مشتری' },
            { en: 'Budget or time set aside for identified risks ("known unknowns")', fa: 'بودجه یا زمان کنار گذاشته شده برای ریسک‌های شناسایی شده ("نادانسته‌های شناخته شده")' },
            { en: 'Profit from the project', fa: 'سود حاصل از پروژه' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Contingency reserves are allocated to handle the impact of risks that have been identified in the risk register, should they occur. They are for "known unknowns".', fa: 'ذخایر احتیاطی برای رسیدگی به تأثیر ریسک‌هایی که در ثبت ریسک شناسایی شده‌اند، در صورت وقوع، تخصیص داده می‌شوند. آنها برای "نادانسته‌های شناخته شده" هستند.' }
        },
        {
          question: { en: 'In the context of VUCA, "Volatility" refers to what?', fa: 'در زمینه VUCA، "نوسان" (Volatility) به چه چیزی اشاره دارد؟' },
          options: [
            { en: 'A lack of clarity or understanding', fa: 'عدم وضوح یا درک' },
            { en: 'The interconnectedness of many system parts', fa: 'اتصال متقابل بسیاری از قطعات سیستم' },
            { en: 'The potential for rapid, unpredictable change', fa: 'پتانسیل برای تغییر سریع و غیرقابل پیش‌بینی' },
            { en: 'An event that has a positive or negative impact', fa: 'رویدادی که تأثیر مثبت یا منفی دارد' }
          ],
          correctAnswer: 2,
          explanation: { en: 'Volatility refers to the speed and unpredictability of change in the project environment. It requires agility and adaptability to manage effectively.', fa: 'نوسان به سرعت و غیرقابل پیش‌بینی بودن تغییر در محیط پروژه اشاره دارد. برای مدیریت مؤثر آن به چابکی و انطباق‌پذیری نیاز است.' }
        }
      ]
    }
  ]
};
