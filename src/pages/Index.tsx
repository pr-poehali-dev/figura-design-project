import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Фижуля
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О продукте
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('contact')}>
              Связаться
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors">
                О продукте
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-left py-2 hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 hover:text-primary transition-colors">
                FAQ
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full">
                Связаться
              </Button>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Инновационное решение для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground">
                Автоматизируйте процессы, увеличивайте продажи и достигайте новых высот вместе с Фижуля
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contact')}>
                  Начать сейчас
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <Icon name="Sparkles" size={120} className="text-primary" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">О продукте</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощный инструмент, который меняет подход к ведению бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl flex items-center justify-center">
                <Icon name="Laptop" size={100} className="text-primary" />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Быстрая интеграция</h3>
                    <p className="text-muted-foreground">
                      Подключение занимает всего несколько минут без специальных знаний
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Безопасность данных</h3>
                    <p className="text-muted-foreground">
                      Многоуровневая защита и шифрование всех данных клиентов
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Рост эффективности</h3>
                    <p className="text-muted-foreground">
                      Увеличение продуктивности команды до 300% за первый месяц
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему более 10,000 компаний выбирают нас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Rocket',
                title: 'Быстрый старт',
                description: 'Начните работу за 5 минут без технических знаний'
              },
              {
                icon: 'Users',
                title: 'Командная работа',
                description: 'Совместная работа в реальном времени для всей команды'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика',
                description: 'Детальные отчёты и визуализация ключевых метрик'
              },
              {
                icon: 'Smartphone',
                title: 'Мобильность',
                description: 'Работайте откуда угодно с любого устройства'
              },
              {
                icon: 'HeadphonesIcon',
                title: 'Поддержка 24/7',
                description: 'Круглосуточная помощь экспертов на русском языке'
              },
              {
                icon: 'Repeat',
                title: 'Автоматизация',
                description: 'Автоматические процессы экономят до 20 часов в неделю'
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши пользователи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Смирнова',
                role: 'CEO, TechStart',
                text: 'Фижуля полностью изменила наш подход к работе. Теперь мы экономим более 15 часов в неделю на рутинных задачах.',
                rating: 5
              },
              {
                name: 'Дмитрий Петров',
                role: 'Маркетолог',
                text: 'Лучший инструмент для автоматизации, который я использовал. Интуитивно понятный интерфейс и мощный функционал.',
                rating: 5
              },
              {
                name: 'Елена Иванова',
                role: 'Founder, StartupHub',
                text: 'Рекомендую всем стартапам! Отличное соотношение цены и качества. Поддержка просто великолепная.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Остались вопросы? Мы всегда рады помочь!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@fizhulya.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы получили ваше сообщение.'); }}>
                  <div>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left">
                Как быстро можно начать использовать продукт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Регистрация занимает всего 2 минуты. После этого вы сразу получите доступ ко всем основным функциям и сможете начать работу. Для полной настройки под ваши задачи может потребоваться 10-15 минут.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left">
                Какие тарифы доступны?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                У нас есть три тарифа: Базовый (бесплатно), Профессиональный (от 990₽/мес) и Корпоративный (индивидуальная цена). Все тарифы можно протестировать 14 дней бесплатно без привязки карты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left">
                Нужны ли технические знания для работы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, абсолютно не нужны! Интерфейс интуитивно понятен и разработан специально для людей без технического бэкграунда. Плюс у нас есть подробные видео-инструкции и техподдержка.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left">
                Можно ли интегрировать с другими сервисами?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Мы поддерживаем интеграцию с более чем 50 популярными сервисами: CRM-системы, мессенджеры, почтовые клиенты, системы аналитики и многое другое. Также доступен API для кастомной интеграции.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
              <AccordionTrigger className="text-left">
                Как обеспечивается безопасность данных?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы используем шифрование SSL/TLS, все данные хранятся на защищённых серверах в России. Регулярно проводим аудит безопасности и соответствуем стандартам ISO 27001. Ваши данные полностью защищены.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Фижуля
              </h3>
              <p className="text-background/70">
                Инновационное решение для автоматизации бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <div className="space-y-2 text-background/70">
                <p className="hover:text-background cursor-pointer transition-colors">Функции</p>
                <p className="hover:text-background cursor-pointer transition-colors">Цены</p>
                <p className="hover:text-background cursor-pointer transition-colors">Безопасность</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-background/70">
                <p className="hover:text-background cursor-pointer transition-colors">О нас</p>
                <p className="hover:text-background cursor-pointer transition-colors">Карьера</p>
                <p className="hover:text-background cursor-pointer transition-colors">Блог</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-background/70">
                <p className="hover:text-background cursor-pointer transition-colors">Помощь</p>
                <p className="hover:text-background cursor-pointer transition-colors">Документация</p>
                <p className="hover:text-background cursor-pointer transition-colors">Контакты</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 Фижуля. Все права защищены.
            </p>
            <div className="flex gap-6">
              <Icon name="Twitter" size={20} className="text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Icon name="Facebook" size={20} className="text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={20} className="text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
