
import { QuizCategory } from './types';

// const PRINCIPLES_QUESTIONS_COUNT = 3; // No longer directly used here, count comes from questions.length
// const DOMAINS_QUESTIONS_COUNT = 5; // No longer directly used here

export const QUIZ_CATEGORIES: QuizCategory[] = [
  // 12 Principles
  {
    id: 'principle_stewardship',
    name: 'Principle 1: Be a Diligent, Respectful, and Caring Steward',
    type: 'principle',
    description: 'This principle emphasizes accountability for resources, the environment, and society. (3 questions)',
    questions: [
      {
        id: 'p1_q1',
        text: 'Which option best defines "Stewardship" in project management?',
        options: [
          { id: 'p1_q1_opt1', text: 'Strict control over all project details.' },
          { id: 'p1_q1_opt2', text: 'Accountability for managing and protecting entrusted resources.' },
          { id: 'p1_q1_opt3', text: 'Sole focus on achieving financial goals.' },
          { id: 'p1_q1_opt4', text: 'Implementing project sponsor\'s orders without question.' },
        ],
        correctOptionId: 'p1_q1_opt2',
        explanation: 'Stewardship means accepting responsibility for carefully and respectfully managing resources (financial, human, material, environmental, etc.) entrusted to the team to achieve project objectives and create sustainable value.'
      },
      {
        id: 'p1_q2',
        text: 'How can a project manager demonstrate diligent stewardship in practice?',
        options: [
          { id: 'p1_q2_opt1', text: 'By minimizing communication with stakeholders to save time.' },
          { id: 'p1_q2_opt2', text: 'By considering the long-term impacts of project decisions on society and the environment.' },
          { id: 'p1_q2_opt3', text: 'By prioritizing cost reduction at any price.' },
          { id: 'p1_q2_opt4', text: 'By ignoring minor ethical concerns to meet project goals.' },
        ],
        correctOptionId: 'p1_q2_opt2',
        explanation: 'Diligent stewardship involves going beyond mere project requirements and considering the broader consequences of project actions, including sustainability, ethics, and social impacts.'
      },
      {
        id: 'p1_q3',
        text: 'Which of the following is an example of failing to adhere to the stewardship principle in a project?',
        options: [
          { id: 'p1_q3_opt1', text: 'Optimal use of the project budget.' },
          { id: 'p1_q3_opt2', text: 'Transparent reporting on project progress.' },
          { id: 'p1_q3_opt3', text: 'Ignoring safety considerations to speed up work.' },
          { id: 'p1_q3_opt4', text: 'Respecting others\' intellectual property.' },
        ],
        correctOptionId: 'p1_q3_opt3',
        explanation: 'Ignoring safety is an example of irresponsible stewardship, as it endangers individuals\' lives and health and can have serious negative consequences for the project and organization.'
      }
    ]
  },
  {
    id: 'principle_collaboration',
    name: 'Principle 2: Create a Collaborative Project Team Environment',
    type: 'principle',
    description: 'This principle emphasizes the importance of teamwork, trust, and open communication in the project team. (3 questions)',
    questions: [
      {
        id: 'p2_q1',
        text: 'What is the most important factor for creating a collaborative team environment?',
        options: [
          { id: 'p2_q1_opt1', text: 'Intense competition among team members.' },
          { id: 'p2_q1_opt2', text: 'Mutual trust and open communication.' },
          { id: 'p2_q1_opt3', text: 'A strict hierarchical structure.' },
          { id: 'p2_q1_opt4', text: 'Exclusive focus on individual tasks.' },
        ],
        correctOptionId: 'p2_q1_opt2',
        explanation: 'Trust and open communication are the foundations of a collaborative team. These factors allow team members to share ideas, concerns, and feedback easily and work together effectively.'
      },
      {
        id: 'p2_q2',
        text: 'Which activity helps strengthen collaboration in a project team?',
        options: [
          { id: 'p2_q2_opt1', text: 'Encouraging the concealment of mistakes.' },
          { id: 'p2_q2_opt2', text: 'Holding group brainstorming sessions.' },
          { id: 'p2_q2_opt3', text: 'Restricting access to project information.' },
          { id: 'p2_q2_opt4', text: 'Ignoring intra-team conflicts.' },
        ],
        correctOptionId: 'p2_q2_opt2',
        explanation: 'Group brainstorming sessions provide an opportunity for all members to participate, share diverse perspectives, and find creative solutions collectively, thereby strengthening collaboration.'
      },
      {
        id: 'p2_q3',
        text: 'What is the project manager\'s role in creating a collaborative team culture?',
        options: [
          { id: 'p2_q3_opt1', text: 'Making decisions for all team members.' },
          { id: 'p2_q3_opt2', text: 'Creating a safe space for expressing opinions and challenging ideas.' },
          { id: 'p2_q3_opt3', text: 'Punishing members who disagree with others\' opinions.' },
          { id: 'p2_q3_opt4', text: 'Limiting social interactions among team members.' },
        ],
        correctOptionId: 'p2_q3_opt2',
        explanation: 'The project manager plays a key role in fostering a collaborative culture by creating a safe and supportive environment, encouraging open communication and mutual respect, and modeling collaborative behaviors.'
      }
    ]
  },
  {
    id: 'principle_stakeholder_engagement',
    name: 'Principle 3: Effectively Engage with Stakeholders',
    type: 'principle',
    description: 'This principle focuses on identifying, understanding, and managing stakeholder expectations for project success. (3 questions)',
    questions: [
      {
        id: 'p3_q1',
        text: 'What is the first step in effectively engaging with stakeholders?',
        options: [
          { id: 'p3_q1_opt1', text: 'Sending weekly progress reports.' },
          { id: 'p3_q1_opt2', text: 'Identifying stakeholders and understanding their needs and expectations.' },
          { id: 'p3_q1_opt3', text: 'Holding a large kickoff meeting for everyone.' },
          { id: 'p3_q1_opt4', text: 'Limiting communication with difficult stakeholders.' },
        ],
        correctOptionId: 'p3_q1_opt2',
        explanation: 'Before any engagement, key stakeholders must be identified, and their needs, expectations, concerns, and level of influence on the project must be understood. This information is the basis for planning effective interactions.'
      },
      {
        id: 'p3_q2',
        text: 'Why is continuous stakeholder engagement important throughout the project life cycle?',
        options: [
          { id: 'p3_q2_opt1', text: 'To get their opinions only at the beginning of the project.' },
          { id: 'p3_q2_opt2', text: 'To ensure alignment with changing expectations and proactively manage issues.' },
          { id: 'p3_q2_opt3', text: 'To reduce the number of project meetings.' },
          { id: 'p3_q2_opt4', text: 'So the project manager doesn\'t have to be accountable.' },
        ],
        correctOptionId: 'p3_q2_opt2',
        explanation: 'Stakeholder needs and expectations may change throughout the project. Continuous engagement helps in early identification of these changes, proactive issue management, and maintaining stakeholder alignment and support.'
      },
      {
        id: 'p3_q3',
        text: 'Which option represents a good engagement strategy for a stakeholder with high power and high interest?',
        options: [
          { id: 'p3_q3_opt1', text: 'Keep informed via group emails (Monitor).' },
          { id: 'p3_q3_opt2', text: 'Keep satisfied with minimal interaction (Keep Satisfied).' },
          { id: 'p3_q3_opt3', text: 'Manage closely and actively involve them in decision-making (Manage Closely).' },
          { id: 'p3_q3_opt4', text: 'Ignore their opinions to prevent delays.' },
        ],
        correctOptionId: 'p3_q3_opt3',
        explanation: 'Stakeholders with high power and high interest are key players in the project and must be managed closely. This includes actively involving them in relevant decision-making, regular communication, and responding to their needs.'
      }
    ]
  },
  {
    id: 'principle_value',
    name: 'Principle 4: Focus on Value',
    type: 'principle',
    description: 'This principle emphasizes that the primary goal of a project is to deliver value to stakeholders and the organization. (3 questions)',
    questions: [
      {
        id: 'p4_q1',
        text: 'How is "value" defined in a project context?',
        options: [
          { id: 'p4_q1_opt1', text: 'Only completing the project within the set budget and time.' },
          { id: 'p4_q1_opt2', text: 'The ultimate benefits, profit, or desirability that the project outcome creates for stakeholders.' },
          { id: 'p4_q1_opt3', text: 'The number of features delivered in the final product.' },
          { id: 'p4_q1_opt4', text: 'The degree of technical complexity of the project.' },
        ],
        correctOptionId: 'p4_q1_opt2',
        explanation: 'Value is the desired ultimate outcome or benefit for stakeholders. This can include financial benefits, improved efficiency, customer satisfaction, or achieving strategic objectives.'
      },
      {
        id: 'p4_q2',
        text: 'How can a project team ensure it is focused on delivering value?',
        options: [
          { id: 'p4_q2_opt1', text: 'By rigidly adhering to the initial plan regardless of environmental changes.' },
          { id: 'p4_q2_opt2', text: 'By clearly understanding business objectives and stakeholder needs and prioritizing work accordingly.' },
          { id: 'p4_q2_opt3', text: 'By adding as many features as possible to the product, even if not essential.' },
          { id: 'p4_q2_opt4', text: 'By focusing solely on cost reduction.' },
        ],
        correctOptionId: 'p4_q2_opt2',
        explanation: 'Focusing on value requires a deep understanding of what is important to stakeholders and aligning all project activities with delivering that value. This includes prioritization, adaptability, and continuous measurement of value.'
      },
      {
        id: 'p4_q3',
        text: 'In agile approaches, how is the focus on value maintained?',
        options: [
          { id: 'p4_q3_opt1', text: 'Through comprehensive documentation at the beginning of the project.' },
          { id: 'p4_q3_opt2', text: 'Through frequent and incremental deliveries of a usable product and receiving stakeholder feedback.' },
          { id: 'p4_q3_opt3', text: 'Through a project manager who makes all value-related decisions.' },
          { id: 'p4_q3_opt4', text: 'Through no changes in project scope after initiation.' },
        ],
        correctOptionId: 'p4_q3_opt2',
        explanation: 'Agile approaches ensure the project is always moving towards delivering the highest possible value by frequently delivering small, usable increments of the product and continuously receiving feedback from customers and stakeholders.'
      }
    ]
  },
  {
    id: 'principle_systems_thinking',
    name: 'Principle 5: Recognize, Evaluate, and Respond to System Interactions',
    type: 'principle',
    description: 'This principle emphasizes understanding the project as part of a larger system and managing dependencies. (3 questions)',
    questions: [
      {
        id: 'p5_q1',
        text: 'What does systems thinking mean in project management?',
        options: [
          { id: 'p5_q1_opt1', text: 'Focusing on project components дерево_вид_сверху_икона.svg separately without considering their interconnections.' },
          { id: 'p5_q1_opt2', text: 'Understanding the project and its environment as a collection of interdependent elements that interact with each other.' },
          { id: 'p5_q1_opt3', text: 'Oversimplifying complex project issues.' },
          { id: 'p5_q1_opt4', text: 'Ignoring external factors affecting the project.' },
        ],
        correctOptionId: 'p5_q1_opt2',
        explanation: 'Systems thinking involves seeing the bigger picture, understanding how different components of a system (project, organization, environment) are interconnected and influence each other.'
      },
      {
        id: 'p5_q2',
        text: 'Why is recognizing system interactions important for a project manager?',
        options: [
          { id: 'p5_q2_opt1', text: 'To be able to shift responsibility for problems to other departments.' },
          { id: 'p5_q2_opt2', text: 'To better predict the unintended consequences of changes and decisions in the project.' },
          { id: 'p5_q2_opt3', text: 'To reduce the need for planning.' },
          { id: 'p5_q2_opt4', text: 'To focus only on internal team tasks.' },
        ],
        correctOptionId: 'p5_q2_opt2',
        explanation: 'Understanding system interactions helps the project manager to identify the ripple effects of decisions across the project and even beyond, leading to more informed decisions that result in more desirable outcomes.'
      },
      {
        id: 'p5_q3',
        text: 'Which action demonstrates the application of systems thinking in a project?',
        options: [
          { id: 'p5_q3_opt1', text: 'Solving problems superficially without investigating root causes.' },
          { id: 'p5_q3_opt2', text: 'Considering the impact of a change in one part of the project on other parts and the entire system.' },
          { id: 'p5_q3_opt3', text: 'Isolating the project team from other organizational units.' },
          { id: 'p5_q3_opt4', text: 'Avoiding any changes to the initial project plan.' },
        ],
        correctOptionId: 'p5_q3_opt2',
        explanation: 'A systems thinker, when examining a change or problem, looks beyond that specific component and seeks to understand how it affects other related elements and the entire project and organizational system.'
      }
    ]
  },
  {
    id: 'principle_leadership',
    name: 'Principle 6: Demonstrate Leadership Behaviors',
    type: 'principle',
    description: 'This principle states that effective leadership is essential for guiding the team and project success, regardless of role or title. (3 questions)',
    questions: [
      {
        id: 'p6_q1',
        text: 'Which is a key characteristic of effective leadership in a project?',
        options: [
          { id: 'p6_q1_opt1', text: 'Commanding and strictly controlling team members.' },
          { id: 'p6_q1_opt2', text: 'Motivating, inspiring, and empowering the team.' },
          { id: 'p6_q1_opt3', text: 'Avoiding difficult decisions.' },
          { id: 'p6_q1_opt4', text: 'Hiding information from the team.' },
        ],
        correctOptionId: 'p6_q1_opt2',
        explanation: 'Effective leaders inspire, motivate, empower their team, and help them reach their full potential. They create an environment of trust and collaboration.'
      },
      {
        id: 'p6_q2',
        text: 'Leadership in a project is limited only to the project manager. Is this statement true or false?',
        options: [
          { id: 'p6_q2_opt1', text: 'True, only the project manager is responsible for leadership.' },
          { id: 'p6_q2_opt2', text: 'False, any team member can and should demonstrate leadership behaviors within their area of responsibility.' },
          { id: 'p6_q2_opt3', text: 'True, because the project manager is the highest authority in the team.' },
          { id: 'p6_q2_opt4', text: 'False, but only experienced individuals can lead.' },
        ],
        correctOptionId: 'p6_q2_opt2',
        explanation: 'Leadership is a behavior, not a title or position. Anyone on the project team can exhibit leadership behaviors by showing initiative, accountability, problem-solving, and inspiring others.'
      },
      {
        id: 'p6_q3',
        text: 'How does a Servant Leader help their team?',
        options: [
          { id: 'p6_q3_opt1', text: 'By focusing on their own needs and prioritizing them.' },
          { id: 'p6_q3_opt2', text: 'By prioritizing the team\'s needs, removing obstacles, and helping them grow and develop.' },
          { id: 'p6_q3_opt3', text: 'By strictly controlling all team activities.' },
          { id: 'p6_q3_opt4', text: 'By avoiding delegation of authority.' },
        ],
        correctOptionId: 'p6_q3_opt2',
        explanation: 'Servant leadership focuses on serving others. A servant leader prioritizes the needs of team members, helps them overcome obstacles, and supports their growth and success.'
      }
    ]
  },
  {
    id: 'principle_tailoring',
    name: 'Principle 7: Tailor Based on Context',
    type: 'principle',
    description: 'This principle emphasizes the importance of adapting project management approaches, processes, and tools to the specific needs of each project. (3 questions)',
    questions: [
      {
        id: 'p7_q1',
        text: 'What does "Tailoring" mean in project management?',
        options: [
          { id: 'p7_q1_opt1', text: 'Using a fixed set of processes for all projects.' },
          { id: 'p7_q1_opt2', text: 'Selecting and adapting the development approach, processes, tools, and methods to fit the unique characteristics of the project and its environment.' },
          { id: 'p7_q1_opt3', text: 'Completely ignoring standard methodologies.' },
          { id: 'p7_q1_opt4', text: 'Exactly copying plans from previous projects.' },
        ],
        correctOptionId: 'p7_q1_opt2',
        explanation: 'Tailoring is the deliberate process of selecting and adapting project management approaches, tools, techniques, and life cycle phases to best suit a specific project and its environment for optimal performance.'
      },
      {
        id: 'p7_q2',
        text: 'Which factor should be considered when tailoring the project management approach?',
        options: [
          { id: 'p7_q2_opt1', text: 'Only the personal preferences of the project manager.' },
          { id: 'p7_q2_opt2', text: 'Project size and complexity, organizational culture, and level of uncertainty.' },
          { id: 'p7_q2_opt3', text: 'The number of team members.' },
          { id: 'p7_q2_opt4', text: 'Only the project budget.' },
        ],
        correctOptionId: 'p7_q2_opt2',
        explanation: 'Multiple factors influence tailoring decisions, including (but not limited to) project size, complexity, and importance, level of uncertainty and risk, organizational culture, team capabilities, and stakeholder needs.'
      },
      {
        id: 'p7_q3',
        text: 'Why is tailoring critical for project success?',
        options: [
          { id: 'p7_q3_opt1', text: 'Because it makes the project manager do less work.' },
          { id: 'p7_q3_opt2', text: 'Because it ensures the project proceeds exactly according to the initial plan.' },
          { id: 'p7_q3_opt3', text: 'Because it helps optimize resource use, increase efficiency, and better respond to specific project needs.' },
          { id: 'p7_q3_opt4', text: 'Because it reduces the need for stakeholder involvement.' },
        ],
        correctOptionId: 'p7_q3_opt3',
        explanation: 'Tailoring allows the project team to use methods that are best suited to the specific project conditions, leading to more effective resource utilization, reduced waste, increased focus on value, and ultimately a higher likelihood of project success.'
      }
    ]
  },
  {
    id: 'principle_quality',
    name: 'Principle 8: Build Quality into Processes and Deliverables',
    type: 'principle',
    description: 'This principle emphasizes focusing on meeting stakeholder needs and expectations through quality in all aspects of the project. (3 questions)',
    questions: [
      {
        id: 'p8_q1',
        text: 'What does quality mean in a project?',
        options: [
          { id: 'p8_q1_opt1', text: 'Only the absence of defects in the final product.' },
          { id: 'p8_q1_opt2', text: 'The degree to which a set of inherent characteristics fulfills requirements.' },
          { id: 'p8_q1_opt3', text: 'The product or service being expensive.' },
          { id: 'p8_q1_opt4', text: 'Adding unnecessary features to exceed expectations.' },
        ],
        correctOptionId: 'p8_q1_opt2',
        explanation: 'Quality refers to the degree to which the project\'s product, service, or result meets defined requirements and expectations. This includes fitness for use and satisfying customer needs.'
      },
      {
        id: 'p8_q2',
        text: 'How can quality be built into project processes?',
        options: [
          { id: 'p8_q2_opt1', text: 'By performing final inspection only at the end of the project.' },
          { id: 'p8_q2_opt2', text: 'By defining clear standards, using proven methods, and conducting frequent reviews.' },
          { id: 'p8_q2_opt3', text: 'By reducing the time spent on quality planning.' },
          { id: 'p8_q2_opt4', text: 'By ignoring team feedback on process improvements.' },
        ],
        correctOptionId: 'p8_q2_opt2',
        explanation: 'Building quality into processes involves quality planning, quality assurance (ensuring processes are followed correctly), and quality control (monitoring and recording results of quality activities).'
      },
      {
        id: 'p8_q3',
        text: 'What does the Cost of Quality (COQ) include?',
        options: [
          { id: 'p8_q3_opt1', text: 'Only costs related to fixing defects after delivery.' },
          { id: 'p8_q3_opt2', text: 'Prevention costs, appraisal costs, and failure costs (internal and external).' },
          { id: 'p8_q3_opt3', text: 'Only costs for training the team on quality.' },
          { id: 'p8_q3_opt4', text: 'The costs the customer pays for a quality product.' },
        ],
        correctOptionId: 'p8_q3_opt2',
        explanation: 'The Cost of Quality includes all costs incurred to ensure quality (costs of conformance: prevention and appraisal) and costs resulting from lack of quality (costs of non-conformance: internal and external failures).'
      }
    ]
  },
  {
    id: 'principle_complexity',
    name: 'Principle 9: Navigate Complexity',
    type: 'principle',
    description: 'This principle addresses the ability to identify, understand, and respond to complexities inherent in projects. (3 questions)',
    questions: [
      {
        id: 'p9_q1',
        text: 'Which factor can add to project complexity?',
        options: [
          { id: 'p9_q1_opt1', text: 'A small number of stakeholders with aligned views.' },
          { id: 'p9_q1_opt2', text: 'Uncertainty in requirements, emerging technologies, and multiple dependencies.' },
          { id: 'p9_q1_opt3', text: 'A small and well-defined project scope.' },
          { id: 'p9_q1_opt4', text: 'High experience of the project team in similar projects.' },
        ],
        correctOptionId: 'p9_q1_opt2',
        explanation: 'Complexity can arise from various sources, including ambiguity in objectives or requirements, the number and diversity of stakeholders, technical or organizational dependencies, and the dynamics of the project environment.'
      },
      {
        id: 'p9_q2',
        text: 'What is a strategy for navigating project complexity?',
        options: [
          { id: 'p9_q2_opt1', text: 'Ignoring complexity and hoping it resolves itself.' },
          { id: 'p9_q2_opt2', text: 'Increasing transparency, frequent communication, and using adaptive approaches.' },
          { id: 'p9_q2_opt3', text: 'Trying to control all details and preventing any changes.' },
          { id: 'p9_q2_opt4', text: 'Restricting information to the project manager.' },
        ],
        correctOptionId: 'p9_q2_opt2',
        explanation: 'Dealing with complexity requires increasing transparency, strengthening communication, continuous learning, flexibility, and using approaches that allow for adaptation to changes and discovery of solutions along the way (such as agile or iterative approaches).'
      },
      {
        id: 'p9_q3',
        text: 'Why is the ability to navigate complexity important for modern project teams?',
        options: [
          { id: 'p9_q3_opt1', text: 'Because projects are becoming increasingly simpler.' },
          { id: 'p9_q3_opt2', text: 'Because many of today\'s projects face high levels of uncertainty, interdependencies, and rapid changes.' },
          { id: 'p9_q3_opt3', text: 'Because complexity always leads to project failure.' },
          { id: 'p9_q3_opt4', text: 'Because only senior managers should worry about complexity.' },
        ],
        correctOptionId: 'p9_q3_opt2',
        explanation: 'Modern project environments are often characterized by dynamism, uncertainty, and numerous interdependencies. The ability to effectively understand and respond to these complexities is crucial for project success.'
      }
    ]
  },
  {
    id: 'principle_risk',
    name: 'Principle 10: Optimize Risk Responses',
    type: 'principle',
    description: 'This principle emphasizes proactively identifying, assessing, and managing risks (threats and opportunities) throughout the project. (3 questions)',
    questions: [
      {
        id: 'p10_q1',
        text: 'What does risk in a project include?',
        options: [
          { id: 'p10_q1_opt1', text: 'Only negative events that can affect the project.' },
          { id: 'p10_q1_opt2', text: 'Only positive events (opportunities) that can benefit the project.' },
          { id: 'p10_q1_opt3', text: 'Any uncertain event or condition that, if it occurs, has a positive or negative effect on one or more project objectives.' },
          { id: 'p10_q1_opt4', text: 'Problems that have already occurred in the project.' },
        ],
        correctOptionId: 'p10_q1_opt3',
        explanation: 'Risk is an uncertain event or condition that, if it occurs, can have a positive (opportunity) or negative (threat) impact on project objectives. Risk management addresses both types.'
      },
      {
        id: 'p10_q2',
        text: 'Which of the following is a response strategy for a negative risk (threat)?',
        options: [
          { id: 'p10_q2_opt1', text: 'Exploit' },
          { id: 'p10_q2_opt2', text: 'Mitigate' },
          { id: 'p10_q2_opt3', text: 'Enhance' },
          { id: 'p10_q2_opt4', text: 'Share' },
        ],
        correctOptionId: 'p10_q2_opt2',
        explanation: 'Common response strategies for threats include: Avoid, Transfer, Mitigate, and Accept. "Mitigate" means taking action to reduce the probability of occurrence or impact of a risk.'
      },
      {
        id: 'p10_q3',
        text: 'Why should risk management be a continuous process throughout the project?',
        options: [
          { id: 'p10_q3_opt1', text: 'Because risks can only be identified at the beginning of the project.' },
          { id: 'p10_q3_opt2', text: 'Because new risks may emerge at any stage of the project, and existing risks may also change.' },
          { id: 'p10_q3_opt3', text: 'Because risk management is no longer necessary after initial planning.' },
          { id: 'p10_q3_opt4', text: 'Because only the risk management team is responsible for it.' },
        ],
        correctOptionId: 'p10_q3_opt2',
        explanation: 'The project environment is dynamic, and risks do not remain static. New risks may emerge, and known risks may change or disappear. Therefore, risk management must be performed continuously throughout the project life cycle.'
      }
    ]
  },
  {
    id: 'principle_adaptability_resiliency',
    name: 'Principle 11: Embrace Adaptability and Resiliency',
    type: 'principle',
    description: 'This principle emphasizes the team\'s ability to adapt to changes and recover from setbacks. (3 questions)',
    questions: [
      {
        id: 'p11_q1',
        text: 'What does Adaptability mean in a project team?',
        options: [
          { id: 'p11_q1_opt1', text: 'Strict adherence to the initial plan regardless of changes.' },
          { id: 'p11_q1_opt2', text: 'The ability to adjust approaches and plans in response to changing conditions and learning.' },
          { id: 'p11_q1_opt3', text: 'Avoiding any risk or uncertainty.' },
          { id: 'p11_q1_opt4', text: 'Doing things exactly as they have always been done.' },
        ],
        correctOptionId: 'p11_q1_opt2',
        explanation: 'Adaptability refers to the ability of the team and organization to respond effectively to changes, adjust plans and approaches based on new information, and learn from experiences.'
      },
      {
        id: 'p11_q2',
        text: 'How is Resiliency defined in a project context?',
        options: [
          { id: 'p11_q2_opt1', text: 'The ability to accurately predict all future problems.' },
          { id: 'p11_q2_opt2', text: 'The ability to absorb or withstand the impacts of an adverse event and quickly recover from it.' },
          { id: 'p11_q2_opt3', text: 'Resistance to any change.' },
          { id: 'p11_q2_opt4', text: 'Ignoring failures and problems.' },
        ],
        correctOptionId: 'p11_q2_opt2',
        explanation: 'Resiliency refers to the capacity of a system, team, or individual to withstand disruptions, absorb negative impacts, and recover functionality after an adverse event or failure.'
      },
      {
        id: 'p11_q3',
        text: 'Which project development approach inherently promotes greater adaptability?',
        options: [
          { id: 'p11_q3_opt1', text: 'Waterfall approach with comprehensive upfront planning.' },
          { id: 'p11_q3_opt2', text: 'Agile approaches with short cycles and frequent feedback.' },
          { id: 'p11_q3_opt3', text: 'An approach that prohibits changes after project initiation.' },
          { id: 'p11_q3_opt4', text: 'An approach that emphasizes detailed documentation over working product.' },
        ],
        correctOptionId: 'p11_q3_opt2',
        explanation: 'Agile approaches, with their emphasis on short development cycles (iterations), incremental deliveries, continuous feedback, and close collaboration with stakeholders, are inherently designed to adapt to changes and uncertainty.'
      }
    ]
  },
  {
    id: 'principle_change_management',
    name: 'Principle 12: Enable Change to Achieve the Envisioned Future State',
    type: 'principle',
    description: 'This principle emphasizes managing the human aspects of change and helping stakeholders adopt and adapt to project outcomes. (3 questions)',
    questions: [
      {
        id: 'p12_q1',
        text: 'What does change management in a project address beyond controlling scope changes?',
        options: [
          { id: 'p12_q1_opt1', text: 'Only updating project documents.' },
          { id: 'p12_q1_opt2', text: 'Preparing, equipping, and supporting individuals to accept, adapt to, and use changes resulting from the project.' },
          { id: 'p12_q1_opt3', text: 'Preventing any changes to the initial plan.' },
          { id: 'p12_q1_opt4', text: 'Only informing senior managers about changes.' },
        ],
        correctOptionId: 'p12_q1_opt2',
        explanation: 'Change management goes beyond the technical process of change control and focuses on the human side of change; that is, helping individuals and groups successfully transition from the current state to the desired future state created by the project.'
      },
      {
        id: 'p12_q2',
        text: 'Why is resistance to change a common phenomenon in projects?',
        options: [
          { id: 'p12_q2_opt1', text: 'Because people inherently dislike improvement and progress.' },
          { id: 'p12_q2_opt2', text: 'Because change can cause uncertainty, loss of control, or the need to learn new skills.' },
          { id: 'p12_q2_opt3', text: 'Because project managers are not strict enough.' },
          { id: 'p12_q2_opt4', text: 'Because change is always bad.' },
        ],
        correctOptionId: 'p12_q2_opt2',
        explanation: 'Resistance to change is a natural human reaction and can have various reasons, including fear of the unknown, concerns about losing status or comfort, lack of understanding of the need for change, or bad experiences with previous changes.'
      },
      {
        id: 'p12_q3',
        text: 'Which action can help facilitate stakeholder adoption of change?',
        options: [
          { id: 'p12_q3_opt1', text: 'Implementing change suddenly and without prior notice.' },
          { id: 'p12_q3_opt2', text: 'Clear and continuous communication about the reasons, benefits, and impacts of change, and involving stakeholders in the process.' },
          { id: 'p12_q3_opt3', text: 'Ignoring stakeholder concerns and feedback.' },
          { id: 'p12_q3_opt4', text: 'Punishing individuals who oppose the change.' },
        ],
        correctOptionId: 'p12_q3_opt2',
        explanation: 'Effective communication, transparency, involving stakeholders in the change process, providing necessary training and support, and addressing their concerns are among the actions that help reduce resistance and facilitate change adoption.'
      }
    ]
  },

  // Performance Domains (8 domains, 5 questions each)
  {
    id: 'stakeholders',
    name: 'Stakeholder Performance Domain',
    type: 'performanceDomain',
    description: 'This domain focuses on effectively engaging with individuals who can affect or be affected by the project. (5 questions)',
    questions: [
      {
        id: 'sh_q1',
        text: 'Which of the following best describes stakeholder analysis?',
        options: [
          { id: 'sh_q1_opt1', text: 'Identifying all individuals affected by the project.' },
          { id: 'sh_q1_opt2', text: 'A process for collecting and analyzing quantitative and qualitative information to determine whose interests should be considered throughout the project.' },
          { id: 'sh_q1_opt3', text: 'Documenting the needs of key stakeholders.' },
          { id: 'sh_q1_opt4', text: 'Planning how to engage with stakeholders.' },
        ],
        correctOptionId: 'sh_q1_opt2',
        explanation: 'Stakeholder analysis is a systematic process of gathering and analyzing information to determine stakeholder interests, expectations, and influence on the project.'
      },
      {
        id: 'sh_q2',
        text: 'What is the purpose of a stakeholder engagement assessment matrix?',
        options: [
          { id: 'sh_q2_opt1', text: 'To identify new stakeholders.' },
          { id: 'sh_q2_opt2', text: 'To compare the current engagement level of stakeholders with the desired engagement level.' },
          { id: 'sh_q2_opt3', text: 'To assign tasks to stakeholders.' },
          { id: 'sh_q2_opt4', text: 'To assess risks related to stakeholders.' },
        ],
        correctOptionId: 'sh_q2_opt2',
        explanation: 'This matrix helps the project manager identify gaps between current and desired stakeholder engagement levels and develop appropriate strategies to achieve the desired level.'
      },
      {
        id: 'sh_q3',
        text: 'Which stakeholder engagement strategy is appropriate for a stakeholder with high power and low interest?',
        options: [
          { id: 'sh_q3_opt1', text: 'Manage Closely' },
          { id: 'sh_q3_opt2', text: 'Keep Satisfied' },
          { id: 'sh_q3_opt3', text: 'Keep Informed' },
          { id: 'sh_q3_opt4', text: 'Monitor' },
        ],
        correctOptionId: 'sh_q3_opt2',
        explanation: 'Stakeholders with high power and low interest should be kept satisfied, as they have significant potential to influence but are not interested in the day-to-day details of the project.'
      },
      {
        id: 'sh_q4',
        text: 'A key stakeholder continually submits new change requests that are outside the initially agreed scope. What is the project manager\'s best initial action?',
        options:
        [
          { id: 'sh_q4_opt1', text: 'Reject all new requests to prevent scope creep.'},
          { id: 'sh_q4_opt2', text: 'Accept all requests to keep the stakeholder satisfied.'},
          { id: 'sh_q4_opt3', text: 'Evaluate each request through the project\'s integrated change control process.'},
          { id: 'sh_q4_opt4', text: 'Ignore the requests until the stakeholder follows up more seriously.'}
        ],
        correctOptionId: 'sh_q4_opt3',
        explanation: 'All change requests must be evaluated through the integrated change control process to assess their impact on scope, time, cost, and quality.'
      },
      {
        id: 'sh_q5',
        text: 'What role does the Project Charter play in stakeholder management?',
        options:
        [
          { id: 'sh_q5_opt1', text: 'It provides a detailed list of all stakeholders and their needs.'},
          { id: 'sh_q5_opt2', text: 'It grants the project manager the authority to execute the project and identifies initial key stakeholders.'},
          { id: 'sh_q5_opt3', text: 'It specifies the stakeholder communication plan.'},
          { id: 'sh_q5_opt4', text: 'It defines risk management strategies related to stakeholders.'}
        ],
        correctOptionId: 'sh_q5_opt2',
        explanation: 'The project charter appoints the project manager and grants them the necessary authority. It may also identify key stakeholders, the project sponsor, and their high-level requirements.'
      }
    ]
  },
  {
    id: 'team',
    name: 'Team Performance Domain',
    type: 'performanceDomain',
    description: 'This domain focuses on creating and maintaining a high-performing project team. (5 questions)',
    questions: [
      {
        id: 't_q1',
        text: 'Which is NOT one of Tuckman\'s stages of team development?',
        options: [
          { id: 't_q1_opt1', text: 'Forming' },
          { id: 't_q1_opt2', text: 'Storming' },
          { id: 't_q1_opt3', text: 'Performing' },
          { id: 't_q1_opt4', text: 'Rewarding' },
        ],
        correctOptionId: 't_q1_opt4',
        explanation: 'Tuckman\'s stages are: Forming, Storming, Norming, Performing, and Adjourning. Rewarding is part of team management but not a distinct stage in this model.'
      },
      {
        id: 't_q2',
        text: 'What does Emotional Intelligence mean for a project manager?',
        options: [
          { id: 't_q2_opt1', text: 'The ability to solve complex technical problems.' },
          { id: 't_q2_opt2', text: 'The ability to understand and manage one\'s own and others\' emotions to guide relationships and decisions.' },
          { id: 't_q2_opt3', text: 'Having extensive knowledge of project management tools and techniques.' },
          { id: 't_q2_opt4', text: 'The ability to negotiate the best contracts.' },
        ],
        correctOptionId: 't_q2_opt2',
        explanation: 'Emotional intelligence includes self-awareness, self-management, social awareness, and relationship management, and is crucial for effective project team leadership.'
      },
      {
        id: 't_q3',
        text: 'In an Agile project team, who has the primary responsibility for prioritizing the Product Backlog?',
        options: [
          { id: 't_q3_opt1', text: 'Scrum Master' },
          { id: 't_q3_opt2', text: 'Product Owner' },
          { id: 't_q3_opt3', text: 'Development Team' },
          { id: 't_q3_opt4', text: 'Project Manager' },
        ],
        correctOptionId: 't_q3_opt2',
        explanation: 'The Product Owner is responsible for maximizing the value of the product resulting from the work of the Development Team, which is done by managing and prioritizing the Product Backlog.'
      },
      {
        id: 't_q4',
        text: 'Which of the following is an example of "Ground Rules" for a project team?',
        options: [
          { id: 't_q4_opt1', text: 'The budget allocated to the project.'},
          { id: 't_q4_opt2', text: 'The project end date.'},
          { id: 't_q4_opt3', text: 'How to handle disagreements and make decisions in meetings.'},
          { id: 't_q4_opt4', text: 'The list of identified project risks.'}
        ],
        correctOptionId: 't_q4_opt3',
        explanation: 'Ground rules establish clear expectations and guidelines for team member behavior, such as communication, decision-making, and conflict resolution.'
      },
      {
        id: 't_q5',
        text: 'What principle does Servant Leadership emphasize?',
        options: [
          { id: 't_q5_opt1', text: 'Strict control of team members\' tasks.'},
          { id: 't_q5_opt2', text: 'Prioritizing the team\'s needs and helping them grow and succeed.'},
          { id: 't_q5_opt3', text: 'Centralized decision-making by the leader.'},
          { id: 't_q5_opt4', text: 'Achieving project goals at any cost.'}
        ],
        correctOptionId: 't_q5_opt2',
        explanation: 'A servant leader focuses on serving others, prioritizes team needs, and helps them achieve their full potential.'
      }
    ]
  },
  {
    id: 'dev_lifecycle',
    name: 'Development Approach and Life Cycle Performance Domain',
    type: 'performanceDomain',
    description: 'This domain addresses selecting and tailoring the project development approach and life cycle to achieve objectives. (5 questions)',
    questions: [
      {
        id: 'dl_q1',
        text: 'What is the main difference between Predictive and Adaptive life cycles?',
        options: [
          { id: 'dl_q1_opt1', text: 'Predictive is for small projects, Adaptive for large projects.' },
          { id: 'dl_q1_opt2', text: 'In Predictive, scope, time, and cost are determined early; in Adaptive, they evolve throughout the project.' },
          { id: 'dl_q1_opt3', text: 'Adaptive is always faster than Predictive.' },
          { id: 'dl_q1_opt4', text: 'In Predictive, teams are self-organizing; in Adaptive, management is centralized.' },
        ],
        correctOptionId: 'dl_q1_opt2',
        explanation: 'Predictive life cycles (e.g., waterfall) are suitable for projects with clear, stable requirements, while Adaptive life cycles (e.g., agile) are designed for environments with high uncertainty and evolving requirements.'
      },
      {
        id: 'dl_q2',
        text: 'Which development approach is more suitable for a project with unclear and changing requirements?',
        options: [
          { id: 'dl_q2_opt1', text: 'Waterfall' },
          { id: 'dl_q2_opt2', text: 'Agile' },
          { id: 'dl_q2_opt3', text: 'Incremental' },
          { id: 'dl_q2_opt4', text: 'Predictive' },
        ],
        correctOptionId: 'dl_q2_opt2',
        explanation: 'Agile approaches are designed to manage uncertainty and changes in requirements, allowing for frequent feedback and adaptation.'
      },
       {
        id: 'dl_q3',
        text: 'In an Iterative life cycle, what is the result of each iteration?',
        options: [
          { id: 'dl_q3_opt1', text: 'A complete and final product.' },
          { id: 'dl_q3_opt2', text: 'A portion of product functionality that gradually becomes more complete.' },
          { id: 'dl_q3_opt3', text: 'Only design documents.' },
          { id: 'dl_q3_opt4', text: 'Planning for the next iteration.' },
        ],
        correctOptionId: 'dl_q3_opt2',
        explanation: 'In an iterative life cycle, the product is developed through a series of repetitive cycles, with each iteration improving or adding to the product functionality.'
      },
       {
        id: 'dl_q4', // Corrected ID from dl_q4_opt3_text and dl_q4_opt4_text for the question
        text: 'The choice of development approach and project life cycle does NOT depend on which factor?',
        options: [
          { id: 'dl_q4_opt1', text: 'The stability of requirements.' },
          { id: 'dl_q4_opt2', text: 'The experience level of the project team.' },
          { id: 'dl_q4_opt3', text: 'The personal preferences of the project manager.' }, // Corrected option ID
          { id: 'dl_q4_opt4', text: 'The complexity and size of the project.' }, // Corrected option ID
        ],
        correctOptionId: 'dl_q4_opt3', // Corrected correctOptionId
        explanation: 'The choice of development approach should be based on project characteristics, environment, and stakeholder needs, not solely on personal preferences.'
      },
       {
        id: 'dl_q5',
        text: 'What does a Hybrid approach in project management mean?',
        options: [
          { id: 'dl_q5_opt1', text: 'Using multiple project managers for one project.' },
          { id: 'dl_q5_opt2', text: 'Integrating elements from different approaches, such as predictive and agile.' },
          { id: 'dl_q5_opt3', text: 'Executing the project without any documented planning.' },
          { id: 'dl_q5_opt4', text: 'Exclusive use of specific software tools.' },
        ],
        correctOptionId: 'dl_q5_opt2',
        explanation: 'A hybrid approach attempts to leverage the strengths of different approaches to better adapt to the specific needs of the project.'
      }
    ]
  },
  {
    id: 'planning',
    name: 'Planning Performance Domain',
    type: 'performanceDomain',
    description: 'This domain focuses on organizing and coordinating the work necessary to achieve project objectives and produce deliverables. (5 questions)',
    questions: [
      {
        id: 'p_q1',
        text: 'In which part of project planning is the Work Breakdown Structure (WBS) created?',
        options: [
          { id: 'p_q1_opt1', text: 'Scope Planning' },
          { id: 'p_q1_opt2', text: 'Schedule Planning' },
          { id: 'p_q1_opt3', text: 'Cost Planning' },
          { id: 'p_q1_opt4', text: 'Quality Planning' },
        ],
        correctOptionId: 'p_q1_opt1',
        explanation: 'The WBS is a hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables. It is a key tool in scope management.'
      },
      {
        id: 'p_q2',
        text: 'What does Activity Duration Estimating mean?',
        options: [
          { id: 'p_q2_opt1', text: 'Determining the project start and end dates.' },
          { id: 'p_q2_opt2', text: 'Estimating the number of work periods needed to complete an activity with estimated resources.' },
          { id: 'p_q2_opt3', text: 'Identifying dependencies between activities.' },
          { id: 'p_q2_opt4', text: 'Assigning resources to activities.' },
        ],
        correctOptionId: 'p_q2_opt2',
        explanation: 'This process involves estimating the time required to perform each activity in the project schedule.'
      },
      {
        id: 'p_q3',
        text: 'What is the Critical Path in a project?',
        options: [
          { id: 'p_q3_opt1', text: 'The shortest path to complete the project.' },
          { id: 'p_q3_opt2', text: 'The path of activities that consumes the most resources.' },
          { id: 'p_q3_opt3', text: 'The sequence of activities that represents the longest duration in the project, and any delay in it causes a delay in the entire project.' },
          { id: 'p_q3_opt4', text: 'The path that includes the riskiest activities.' },
        ],
        correctOptionId: 'p_q3_opt3',
        explanation: 'The critical path shows the longest path in the project activity network and determines the shortest possible time to complete the project. Activities on this path have zero float.'
      },
      {
        id: 'p_q4',
        text: 'What does the Risk Management Plan include?',
        options: [
          { id: 'p_q4_opt1', text: 'Only the list of identified risks.' },
          { id: 'p_q4_opt2', text: 'How to plan, identify, analyze, respond to, and monitor risks in the project.' },
          { id: 'p_q4_opt3', text: 'The budget allocated for responding to risks.' },
          { id: 'p_q4_opt4', text: 'Only risk response strategies.' },
        ],
        correctOptionId: 'p_q4_opt2',
        explanation: 'The risk management plan defines the overall approach and processes that will be followed for managing risk throughout the project.'
      },
      {
        id: 'p_q5',
        text: 'What is the concept of "Rolling Wave Planning"?',
        options: [
          { id: 'p_q5_opt1', text: 'Detailed planning of the entire project at the beginning.' },
          { id: 'p_q5_opt2', text: 'A form of progressive elaboration planning where near-term work is planned in detail and long-term work remains at a higher level.' },
          { id: 'p_q5_opt3', text: 'Planning only for the first phase of the project.' },
          { id: 'p_q5_opt4', text: 'No planning and reacting to issues as they occur.' },
        ],
        correctOptionId: 'p_q5_opt2',
        explanation: 'Rolling wave planning is an iterative planning technique in which work to be accomplished in the near term is planned in detail, while work further in the future is planned at a higher level of the WBS. As work progresses, more detail is added to these future work packages.'
      }
    ]
  },
  {
    id: 'project_work',
    name: 'Project Work Performance Domain',
    type: 'performanceDomain',
    description: 'This domain focuses on managing the execution of tasks, processes, and resources to produce project deliverables. (5 questions)',
    questions: [
      {
        id: 'pw_q1',
        text: 'What activities does the "Direct and Manage Project Work" process involve?',
        options: [
          { id: 'pw_q1_opt1', text: 'Creating the project management plan.' },
          { id: 'pw_q1_opt2', text: 'Executing the work defined in the project management plan to achieve project objectives.' },
          { id: 'pw_q1_opt3', text: 'Monitoring and controlling project changes.' },
          { id: 'pw_q1_opt4', text: 'Closing the project or phase.' },
        ],
        correctOptionId: 'pw_q1_opt2',
        explanation: 'This process involves leading and performing the work defined in the project management plan and implementing approved changes to achieve project objectives.'
      },
      {
        id: 'pw_q2',
        text: 'For what purpose is Project Knowledge Management performed?',
        options: [
          { id: 'pw_q2_opt1', text: 'To restrict access to project information.' },
          { id: 'pw_q2_opt2', text: 'To use existing knowledge and create new knowledge to achieve project objectives and contribute to organizational learning.' },
          { id: 'pw_q2_opt3', text: 'Only for documenting lessons learned at the end of the project.' },
          { id: 'pw_q2_opt4', text: 'To ensure only the project manager has access to key knowledge.' },
        ],
        correctOptionId: 'pw_q2_opt2',
        explanation: 'Project knowledge management includes processes to ensure that the skills, experiences, and lessons learned of the project team and other stakeholders are effectively used to achieve project objectives and improve future projects.'
      },
      {
        id: 'pw_q3',
        text: 'What is Work Performance Information?',
        options: [
          { id: 'pw_q3_opt1', text: 'Raw data collected from execution processes.' },
          { id: 'pw_q3_opt2', text: 'Performance data and information that have been collected, analyzed, and integrated to show project status.' },
          { id: 'pw_q3_opt3', text: 'Only approved change requests.' },
          { id: 'pw_q3_opt4', text: 'The initial project plan.' },
        ],
        correctOptionId: 'pw_q3_opt2',
        explanation: 'Work performance information is performance data that has been collected from various controlling processes, analyzed in context and integrated based on relationships across areas. This information informs stakeholders about project status, such as progress against baselines.'
      },
      {
        id: 'pw_q4',
        text: 'What stages does Issue Management in a project include?',
        options: [
          { id: 'pw_q4_opt1', text: 'Only recording issues in a log.' },
          { id: 'pw_q4_opt2', text: 'Identifying, documenting, analyzing, prioritizing, resolving, and tracking issues until they are closed.' },
          { id: 'pw_q4_opt3', text: 'Ignoring minor issues to focus on major ones.' },
          { id: 'pw_q4_opt4', text: 'Referring all issues to the project sponsor.' },
        ],
        correctOptionId: 'pw_q4_opt2',
        explanation: 'Effective issue management involves a structured process for identifying, logging, analyzing, prioritizing, assigning responsibility, tracking resolution, and verifying closure of issues.'
      },
      {
        id: 'pw_q5',
        text: 'Why is Quality Assurance important during project work execution?',
        options: [
          { id: 'pw_q5_opt1', text: 'To check quality only at the end of the project.' },
          { id: 'pw_q5_opt2', text: 'To ensure that quality processes and standards are being followed correctly and to prevent defects.' },
          { id: 'pw_q5_opt3', text: 'To increase project costs.' },
          { id: 'pw_q5_opt4', text: 'To make the team work slower.' },
        ],
        correctOptionId: 'pw_q5_opt2',
        explanation: 'Quality assurance is a preventive process focused on ensuring that the processes used to produce deliverables are appropriate and are being executed correctly. This helps prevent defects and improve overall quality.'
      }
    ]
  },
  {
    id: 'delivery',
    name: 'Delivery Performance Domain',
    type: 'performanceDomain',
    description: 'This domain focuses on delivering value to customers and stakeholders by producing deliverables that meet quality and schedule requirements. (5 questions)',
    questions: [
      {
        id: 'd_q1',
        text: 'What does "Value" mean in project delivery?',
        options: [
          { id: 'd_q1_opt1', text: 'Only delivering the project on time and within budget.' },
          { id: 'd_q1_opt2', text: 'The financial profitability of the project for the organization.' },
          { id: 'd_q1_opt3', text: 'The net worth of benefits from the project outcome minus the cost of achieving it, as perceived by stakeholders.' },
          { id: 'd_q1_opt4', text: 'The number of features delivered in the product.' },
        ],
        correctOptionId: 'd_q1_opt3',
        explanation: 'Value in modern project management extends beyond the triple constraints (time, cost, scope) and includes overall benefits, stakeholder satisfaction, and alignment with strategic objectives.'
      },
      {
        id: 'd_q2',
        text: 'In agile approaches, how are deliverables presented to the customer?',
        options: [
          { id: 'd_q2_opt1', text: 'Only at the end of the project in one go.' },
          { id: 'd_q2_opt2', text: 'Frequently and incrementally, so the customer can provide regular feedback.' },
          { id: 'd_q2_opt3', text: 'After final approval by all senior managers.' },
          { id: 'd_q2_opt4', text: 'Whenever the development team deems appropriate.' },
        ],
        correctOptionId: 'd_q2_opt2',
        explanation: 'Agile approaches emphasize frequent delivery of usable product versions (increments) to allow for early and continuous customer feedback and adaptation to changing needs.'
      },
      {
        id: 'd_q3',
        text: 'What is the Validate Scope process?',
        options: [
          { id: 'd_q3_opt1', text: 'The process of creating the WBS.' },
          { id: 'd_q3_opt2', text: 'The process of formalizing acceptance of the completed project deliverables by relevant stakeholders.' },
          { id: 'd_q3_opt3', text: 'The process of monitoring project scope status and managing changes to the scope baseline.' },
          { id: 'd_q3_opt4', text: 'The process of defining and documenting stakeholder needs.' },
        ],
        correctOptionId: 'd_q3_opt2',
        explanation: 'Validate Scope is the process of obtaining formal acceptance of completed project deliverables from the customer or project sponsor. This is usually done after quality control.'
      },
      {
        id: 'd_q4',
        text: 'How are stakeholder expectations about project delivery managed?',
        options: [
          { id: 'd_q4_opt1', text: 'By making grand promises to gain their initial satisfaction.' },
          { id: 'd_q4_opt2', text: 'Through transparent, regular, and realistic communication about progress, risks, and issues.' },
          { id: 'd_q4_opt3', text: 'By restricting information to the bare minimum.' },
          { id: 'd_q4_opt4', text: 'By blaming others in case of delays.' },
        ],
        correctOptionId: 'd_q4_opt2',
        explanation: 'Effective expectation management requires proactive, transparent, and honest communication with stakeholders throughout the project life cycle. This includes informing them about actual progress, challenges, and any changes to plans.'
      },
      {
        id: 'd_q5',
        text: 'What does the "Definition of Done" (DoD) in agile projects refer to?',
        options: [
          { id: 'd_q5_opt1', text: 'A list of tasks to be completed before starting a sprint.' },
          { id: 'd_q5_opt2', text: 'A set of criteria that a Product Backlog Item (PBI) or product increment must meet to be considered deliverable or complete.' },
          { id: 'd_q5_opt3', text: 'The detailed schedule for each sprint.' },
          { id: 'd_q5_opt4', text: 'It only means coding is complete.' },
        ],
        correctOptionId: 'd_q5_opt2',
        explanation: 'The DoD is a shared understanding within the agile team about the quality and completeness of a work item. It ensures that all team members have the same understanding of what "done" means.'
      }
    ]
  },
  {
    id: 'measurement',
    name: 'Measurement Performance Domain',
    type: 'performanceDomain',
    description: 'This domain focuses on assessing project performance and making informed decisions based on data and analysis. (5 questions)',
    questions: [
      {
        id: 'm_q1',
        text: 'For what purpose is Earned Value Analysis (EVA) used?',
        options: [
          { id: 'm_q1_opt1', text: 'To measure customer satisfaction.' },
          { id: 'm_q1_opt2', text: 'To assess project performance by comparing work performed against the plan and actual costs.' },
          { id: 'm_q1_opt3', text: 'To identify project risks.' },
          { id: 'm_q1_opt4', text: 'To allocate resources to project activities.' },
        ],
        correctOptionId: 'm_q1_opt2',
        explanation: 'EVA is a powerful method for integrating scope, schedule, and cost measurements to assess project performance and progress.'
      },
      {
        id: 'm_q2',
        text: 'How is the Cost Performance Index (CPI) calculated in Earned Value Analysis?',
        options: [
          { id: 'm_q2_opt1', text: 'Earned Value (EV) divided by Actual Cost (AC).' },
          { id: 'm_q2_opt2', text: 'Earned Value (EV) minus Actual Cost (AC).' },
          { id: 'm_q2_opt3', text: 'Planned Value (PV) divided by Actual Cost (AC).' },
          { id: 'm_q2_opt4', text: 'Actual Cost (AC) divided by Earned Value (EV).' },
        ],
        correctOptionId: 'm_q2_opt1',
        explanation: 'CPI = EV / AC. If CPI is greater than 1, it means cost performance is better than budget (less cost for work done). If less than 1, it means cost performance is worse than budget (more cost).'
      },
      {
        id: 'm_q3',
        text: 'What does a Burndown Chart in agile projects show?',
        options: [
          { id: 'm_q3_opt1', text: 'The amount of budget consumed over time.' },
          { id: 'm_q3_opt2', text: 'The amount of work remaining in a sprint or release over time.' },
          { id: 'm_q3_opt3', text: 'The number of identified risks.' },
          { id: 'm_q3_opt4', text: 'The level of customer satisfaction.' },
        ],
        correctOptionId: 'm_q3_opt2',
        explanation: 'A Burndown Chart visually displays the amount of work remaining (usually in story points or hours) against time, helping the team track its progress towards the sprint or release goal.'
      },
      {
        id: 'm_q4',
        text: 'What is a Performance Baseline?',
        options: [
          { id: 'm_q4_opt1', text: 'The weekly project status report.' },
          { id: 'm_q4_opt2', text: 'An approved version of the work plan used as a basis for comparison against actual performance.' },
          { id: 'm_q4_opt3', text: 'The list of all project risks.' },
          { id: 'm_q4_opt4', text: 'Only the initial project budget.' },
        ],
        correctOptionId: 'm_q4_opt2',
        explanation: 'Performance baselines (e.g., scope baseline, schedule baseline, cost baseline) are approved versions of project plans against which actual project performance is compared to identify and manage deviations.'
      },
      {
        id: 'm_q5',
        text: 'Why is collecting and analyzing project performance data important?',
        options: [
          { id: 'm_q5_opt1', text: 'Only for reporting to senior managers.' },
          { id: 'm_q5_opt2', text: 'To identify trends, predict future outcomes, make evidence-based decisions, and enable continuous improvement.' },
          { id: 'm_q5_opt3', text: 'To keep the project team busy.' },
          { id: 'm_q5_opt4', text: 'To prove that the initial plan was always correct.' },
        ],
        correctOptionId: 'm_q5_opt2',
        explanation: 'Measuring and analyzing performance allows the project team and stakeholders to understand the actual project status, identify problems frühzeitig, assess the effectiveness of responses, and make informed decisions to steer the project towards success.'
      }
    ]
  },
  {
    id: 'uncertainty',
    name: 'Uncertainty Performance Domain',
    type: 'performanceDomain',
    description: 'This domain addresses identifying, assessing, and responding to risks and uncertainties throughout the project life cycle. (5 questions)',
    questions: [
      {
        id: 'u_q1',
        text: 'What is the main difference between a Risk and an Issue?',
        options: [
          { id: 'u_q1_opt1', text: 'Risks are always negative, while issues can be positive.' },
          { id: 'u_q1_opt2', text: 'A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on project objectives, while an issue is a current problem or obstacle that needs to be addressed.' },
          { id: 'u_q1_opt3', text: 'Managing issues is more complex than managing risks.' },
          { id: 'u_q1_opt4', text: 'Risks are only identified at the beginning of the project, but issues appear throughout the project.' },
        ],
        correctOptionId: 'u_q1_opt2',
        explanation: 'Risk relates to the future and uncertainty, while an issue is an existing problem requiring immediate action. Risk management involves proactive planning.'
      },
      {
        id: 'u_q2',
        text: 'What does Qualitative Risk Analysis involve?',
        options: [
          { id: 'u_q2_opt1', text: 'Assigning a numerical value to the probability and impact of each risk.' },
          { id: 'u_q2_opt2', text: 'Prioritizing risks for further analysis or action by assessing their probability of occurrence and impact.' },
          { id: 'u_q2_opt3', text: 'Calculating the Expected Monetary Value (EMV) for risks.' },
          { id: 'u_q2_opt4', text: 'Only identifying risks.' },
        ],
        correctOptionId: 'u_q2_opt2',
        explanation: 'Qualitative risk analysis assesses and prioritizes risks based on their probability of occurrence and potential impact on project objectives. This helps focus on the most significant risks.'
      },
      {
        id: 'u_q3',
        text: 'What does the "Accept" strategy in risk response mean?',
        options: [
          { id: 'u_q3_opt1', text: 'Completely eliminating the risk or protecting the project from its impact.' },
          { id: 'u_q3_opt2', text: 'Transferring responsibility for responding to the risk to a third party.' },
          { id: 'u_q3_opt3', text: 'Deciding not to change the project plan to deal with a risk, or not taking action unless the risk occurs.' },
          { id: 'u_q3_opt4', text: 'Reducing the probability of occurrence or impact of the risk.' },
        ],
        correctOptionId: 'u_q3_opt3',
        explanation: 'Risk acceptance is a strategy where the project team decides to take no action to address a risk (active acceptance) or to respond only if the risk occurs (passive acceptance). This strategy is typically used for low-priority risks.'
      },
      {
        id: 'u_q4',
        text: 'What is the concept of "Contingency Reserve" in risk management?',
        options: [
          { id: 'u_q4_opt1', text: 'A budget for covering unapproved scope changes.' },
          { id: 'u_q4_opt2', text: 'Time or budget set aside to address identified risks ("known-unknowns").' },
          { id: 'u_q4_opt3', text: 'A budget for covering unknown risks ("unknown-unknowns").' },
          { id: 'u_q4_opt4', text: 'The project profit.' },
        ],
        correctOptionId: 'u_q4_opt2',
        explanation: 'Contingency reserves are part of the cost or schedule baseline allocated for responding to identified risks (also known as "known uncertainties" or "known-unknowns") that are planned for in the risk management plan.'
      },
      {
        id: 'u_q5',
        text: 'Why is identifying opportunities (positive risks) as important as identifying threats (negative risks)?',
        options: [
          { id: 'u_q5_opt1', text: 'Because opportunities always realize themselves automatically.' },
          { id: 'u_q5_opt2', text: 'Because managing opportunities can help increase project value, reduce time or cost, or improve quality.' },
          { id: 'u_q5_opt3', text: 'Because opportunities usually have less impact than threats.' },
          { id: 'u_q5_opt4', text: 'Because only threats require response planning.' },
        ],
        correctOptionId: 'u_q5_opt2',
        explanation: 'Risk management addresses both threats and opportunities. Actively identifying and exploiting opportunities can lead to better outcomes and increased value for the project, just as managing threats helps prevent negative consequences.'
      }
    ]
  }
];