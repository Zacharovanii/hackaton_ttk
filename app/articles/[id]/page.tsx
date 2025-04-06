"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, History } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { ArticleContent } from "@/components/shared/articleContent";
import { url } from "inspector";

interface Article {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	lastEditor: string;
	imageUrl: string;
}

export default function ArticlePage() {
	const params = useParams();
	const [article, setArticle] = useState<Article | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Здесь будет запрос к API для получения статьи
		// Пока используем моковые данные
		const mockArticle = {
			id: params.id as string,
			title: "Основы React",
			content:
				"<h1>Как работают базовые станции сотовой связи: от звонка до интернета  </h1><p>Каждый раз, когда вы совершаете звонок, отправляете сообщение или используете мобильный интернет, ваш смартфон взаимодействует с базовыми станциями сотовой связи. Но как именно работает этот процесс? В этой статье мы разберем, как устроена мобильная сеть, какие технологии используются и что влияет на качество сигнала.  </p><h2> 1. Что такое базовая станция?  </h2><p>Базовая станция (BS) – это устройство, которое обеспечивает беспроводную связь между мобильными устройствами и ядром сети оператора. Она передает и принимает радиосигналы, обрабатывает звонки и передает данные через сеть.  </p><ol><li><p>Базовые станции могут различаться по мощности и радиусу действия:  </p></li><li><p>- Макросоты – классические вышки с радиусом покрытия от 1 до 50 км.  </p></li><li><p>- Микросоты – небольшие станции, устанавливаемые в городах и торговых центрах (радиус до 2 км).  </p></li><li><p>- Пикосоты и фемтосоты – миниатюрные станции для офисов и помещений (радиус до 200 м).  </p></li></ol><h3>2. Как происходит передача сигнала?  </h3><p>Когда вы совершаете звонок или подключаетесь к интернету, процесс происходит в несколько этапов:  </p><ol><li><p>1. Поиск ближайшей базовой станции – телефон определяет, какой сигнал сильнее, и подключается к соответствующей вышке.  </p></li><li><p>2. Передача сигнала – смартфон отправляет данные в виде радиоволн, которые принимаются базовой станцией.  </p></li><li><p>3. Передача в ядро сети – информация передается по проводным или беспроводным каналам в сеть оператора (например, через оптоволоконные линии).  </p></li><li><p>4. Соединение с другим абонентом или интернетом – звонок направляется в телефонную сеть, а интернет-запрос – на серверы провайдера.  </p></li><li><p>5. Обратная передача данных – ответ приходит по той же цепочке, и вы слышите голос собеседника или получаете загруженную страницу.  </p></li></ol><p> 3. Какие технологии используются в базовых станциях?  </p><p>Современные сети поддерживают несколько поколений мобильной связи:  </p><p>- 2G (GSM) – голосовые звонки и SMS, низкие скорости интернета (до 0,1 Мбит/с).  </p><p>- 3G (UMTS, HSPA+) – более быстрая передача данных (до 42 Мбит/с).  </p><p>- 4G (LTE) – высокоскоростной мобильный интернет (до 1 Гбит/с).  </p><p>- 5G – новейшая технология, обеспечивающая скорости до 10 Гбит/с и минимальную задержку.  </p><p>Некоторые базовые станции поддерживают сразу несколько стандартов, автоматически выбирая оптимальный режим работы в зависимости от сети и устройства.  </p><p>4. Что влияет на качество сигнала?  </p><p>Не всегда мобильная связь работает идеально. Качество сигнала зависит от нескольких факторов:  </p><p>1. Расстояние до базовой станции – чем дальше, тем слабее сигнал.  </p><p>2. Физические преграды – здания, деревья и даже погодные условия могут ослаблять радиосигнал.  </p><p>3. Нагрузка на сеть – если слишком много пользователей подключены к одной станции, скорость интернета падает.  </p><p>4. Тип покрытия – в сельской местности используются более мощные вышки, но их меньше, чем в городах.  </p><p>Операторы решают эти проблемы, устанавливая дополнительные вышки, использую повторители сигнала и разворачивая сети 5G с малым радиусом покрытия, но высокой скоростью передачи данных.  </p><p>5. Как развивается мобильная сеть?  </p><p>В будущем базовые станции станут еще умнее и эффективнее:  </p><p>- Сети 5G позволят подключать миллионы устройств без перегрузок.  </p><p>- Использование искусственного интеллекта поможет автоматизировать управление трафиком.  </p><p>- Спутниковая связь интегрируется с мобильными сетями, обеспечивая покрытие даже в труднодоступных районах.  </p><p>Благодаря этим технологиям мобильный интернет и голосовая связь станут еще быстрее, надежнее и доступнее для всех пользователей.  </p><p>Вывод  </p><p>Базовые станции – ключевой элемент мобильной связи, обеспечивающий стабильное соединение между абонентами и интернетом. Технологии постоянно развиваются, улучшая скорость и качество передачи данных. В ближайшие годы нас ждут еще более продвинутые сети, которые изменят способ, которым мы взаимодействуем с миром.</p>",
			createdAt: "2024-03-01T10:00:00Z",
			lastEditor: "Иван Иванов",
			imageUrl: "/react-intro.jpg",
		};
		setArticle(mockArticle);
		setIsLoading(false);
	}, [params.id]);

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	if (!article) {
		return <div>Статья не найдена</div>;
	}

	return (
		<Container>
			<div className="flex items-center gap-4 my-8">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/articles">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-3xl font-bold">{article.title}</h1>
			</div>

			<div className="grid gap-8 md:grid-cols-3">
				<div className="md:col-span-2">
					<Card>
						<CardHeader className="p-0">
							<div className="relative h-64 w-full">
								<Image
									src={article.imageUrl}
									alt={article.title}
									fill
									className="object-cover rounded-t-lg"
								/>
							</div>
						</CardHeader>
						<CardContent className="p-6">
							<ArticleContent content={article.content} />
						</CardContent>
					</Card>
				</div>

				<div className="space-y-4">
					<Card>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">
										Создано
									</h3>
									<p className="text-sm">
										{new Date(article.createdAt).toLocaleDateString()}
									</p>
								</div>
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">
										Последний редактор
									</h3>
									<p className="text-sm">{article.lastEditor}</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="flex gap-2">
						<Button variant="outline" className="flex-1" asChild>
							<Link href={`/articles/${article.id}/edit`}>
								<Edit className="h-4 w-4 mr-2" />
								Редактировать
							</Link>
						</Button>
						<Button variant="outline" className="flex-1" asChild>
							<Link href={`/articles/${article.id}/history`}>
								<History className="h-4 w-4 mr-2" />
								История
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
