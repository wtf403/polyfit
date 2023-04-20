DROP TABLE IF EXISTS exercise CASCADE;
DROP TABLE IF EXISTS workout CASCADE;
DROP TABLE IF EXISTS workout_exercise CASCADE;

CREATE TABLE exercise
(
"id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
"title" VARCHAR(255) NOT NULL,
"hardness" FLOAT NOT NULL,
"amount" INT NOT NULL,
"media" VARCHAR(255),
"show_timer" BOOLEAN NOT NULL,
"calories" INT NOT NULL,
"equipment" INT,
"gender" INT
);

CREATE TABLE workout
(
"id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
"title" VARCHAR(255) NOT NULL,
"description" VARCHAR(255) NOT NULL,
"type" INT,
"calories" INT NOT NULL,
"media" VARCHAR(255),
"gender" INT
);

CREATE TABLE workout_exercise
(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
workout_id UUID NOT NULL,
exercise_id UUID NOT NULL,

CONSTRAINT workout_fk FOREIGN KEY (workout_id) REFERENCES workout (id),
CONSTRAINT exercise_fk FOREIGN KEY (exercise_id) REFERENCES exercise (id),
CONSTRAINT workout_exercise_unique UNIQUE (workout_id, exercise_id)
);

-- Тренировка 1
INSERT INTO workout (id, title, description, calories, media)
VALUES ('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'Тренируем нашу выносливость', 'Основная задача – «многоповторка» с ограниченным временем отдыха', 1200, 'https://polyfit.live/img/WorkoutImage-0.b77bc868.png');

INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES
('f5fdfc19-96ec-418f-8f4a-d60f1d35897f', 'Ходьба на месте с высоким подниманием коленей', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 90),
('b8888e22-cb28-401c-ad69-cab718914516', 'Вращение кистей', 1.0, 6, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 50),
('ee146347-f56e-4837-9967-f38cec7c6332', 'Вращение предплечий', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 70),
('f88ab3a2-f7d9-4a99-805d-18be8cc7502d', 'Вращение прямых рук вперёд', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 90),
('9daf0cfa-35d5-4081-a9b0-084b60853f95', 'Вращение прямых рук назад', 1.0, 5, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 90),
('93c37c65-1a2a-4a4e-8d36-0211477817b5', 'Наклоны корпуса вперёд', 1.0, 5, 'https://static.w.f-365.ru/imported/webp/8/262.webp', false, 70),
('b0a816ba-a08b-40cc-81b3-f94b226ec99f', 'Вращение корпуса в наклоне', 1.0, 20, 'https://static.w.f-365.ru/imported/webp/8/285.webp', false, 80),
('f98d0455-85e3-43cd-b6be-79e26518a870', 'Отжимания от подоконника', 1.0, 20, 'https://static.w.f-365.ru/imported/webp/8/004x002.webp', false, 95),
('84e039f0-bc7c-447a-b8f6-54698356d559', 'Отжимания от стола/барной стойки', 1.0, 21, 'https://static.w.f-365.ru/imported/webp/8/196.webp', false, 95),
('b505500c-788c-4aa0-93eb-c1db4f254c85', 'Отжимания от стены', 1.0, 16, 'https://static.w.f-365.ru/imported/webp/8/276.webp', false, 75),
('e82d9efd-f0aa-4823-8929-6cf88ba9ed1f', 'Упражнение на грудную мышцу', 1.0, 160, 'https://static.w.f-365.ru/imported/webp/8/292.webp', false, 80),
('debbc74b-6c69-49eb-a026-d6fa3b275947', 'Упражнение на верхний пучок грудных мышц', 1.0, 17, 'https://static.w.f-365.ru/imported/webp/8/150.webp', false, 80),
('75576786-b600-4208-b7cb-1da16c875cb8', 'Упражнение на нижний пучок грудных мышц', 1.0, 16, 'https://static.w.f-365.ru/imported/webp/8/226x225.webp', false, 80),
('aee69eb8-61c9-4e56-9931-06b847bc7475', 'Отжимания от скамьи/стула обратным хватом', 1.0, 17, 'https://static.w.f-365.ru/imported/webp/8/278x277.webp', false, 100),
('19c2c423-452b-48c4-b575-4d356b13da80', 'Тяга эспандера сверху вниз (на трицепс)', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 80),
('7f61b565-d153-4f04-bace-caf475f43275', 'Руль (на плечи)', 1.0, 14, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 70),
('af3d4c9f-8c74-4991-ada4-fab00040e923', 'Трёхминутка на плечи', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/250.webp', false, 90),
('2bdb42a5-8d59-4602-a846-596b4bcec051', 'Сгибание коленных суставов сидя', 1.0, 18, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 110),
('fc9904a6-ccaf-4cc9-b0ef-b6763cfb2190', 'Растяжка к стопами', 1.0, 5, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 60),
('76e22c5d-23a8-4cf3-b447-cd7880979053', 'Лёгкая растяжка на всё тело', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/262.webp', false, 80);

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'f5fdfc19-96ec-418f-8f4a-d60f1d35897f'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'b8888e22-cb28-401c-ad69-cab718914516'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'ee146347-f56e-4837-9967-f38cec7c6332'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'f88ab3a2-f7d9-4a99-805d-18be8cc7502d'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '9daf0cfa-35d5-4081-a9b0-084b60853f95'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '93c37c65-1a2a-4a4e-8d36-0211477817b5'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'b0a816ba-a08b-40cc-81b3-f94b226ec99f'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'f98d0455-85e3-43cd-b6be-79e26518a870'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '84e039f0-bc7c-447a-b8f6-54698356d559'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'b505500c-788c-4aa0-93eb-c1db4f254c85'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'e82d9efd-f0aa-4823-8929-6cf88ba9ed1f'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'debbc74b-6c69-49eb-a026-d6fa3b275947'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '75576786-b600-4208-b7cb-1da16c875cb8'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'aee69eb8-61c9-4e56-9931-06b847bc7475'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '19c2c423-452b-48c4-b575-4d356b13da80'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '7f61b565-d153-4f04-bace-caf475f43275'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'af3d4c9f-8c74-4991-ada4-fab00040e923'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '2bdb42a5-8d59-4602-a846-596b4bcec051'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', 'fc9904a6-ccaf-4cc9-b0ef-b6763cfb2190'),
('f8aad11a-9a72-428a-8832-1ef2f09509ac', '76e22c5d-23a8-4cf3-b447-cd7880979053');

-- Тренировка 2
INSERT INTO workout (id, title, description, calories, media)
VALUES ('2ecf8826-deda-11ed-b5ea-0242ac120002', 'Учимся подтягиваться', 'Основная задача – «многоповторка» с ограниченным временем отдыха', 1500, 'https://polyfit.live/img/WorkoutImage-1.415a728d.png');

INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES
('d28b1a9c-920e-43ba-927e-11a2b1fa6b0d', 'Ходьба на месте с высоким подниманием коленей', 1.0, 120, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 90),
('d3028a8e-48df-474b-9711-04e11e43c12e', 'Вращение кистей', 1.0, 13, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 50),
('3b8016ca-a7bf-462a-994c-72d39ca57b96', 'Вращение предплечий', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/196.webp', false, 70),
('542bb226-00f6-4589-a4a7-9d965e044174', 'Вращение прямых рук вперёд', 1.0, 18, 'https://static.w.f-365.ru/imported/webp/8/226x225.webp', false, 90),
('42b0378b-5a88-493c-be43-5454fd1422b1', 'Вращение прямых рук назад', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/250.webp', false, 90),
('aadde019-fab3-4c4f-9321-b313022a08b9', 'Наклоны корпуса вперёд', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 70),
('914b49c3-6411-4a85-8c3c-f7613cf52625', 'Вращение корпуса в наклоне', 1.0, 7, 'https://static.w.f-365.ru/imported/webp/8/262.webp', false, 80),
('5e71a855-6014-438e-bce7-80852c05d426', 'Австралийские подтягивания', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/276.webp', false, 90),
('9733d444-7879-40a5-9c06-d8fa8f452e06', 'Негативные подтягивания', 1.0, 6, 'https://static.w.f-365.ru/imported/webp/8/278x277.webp', false, 80),
('471d2365-39e0-40a5-af3a-e3f6d0080ed4', 'Упражнение с эспандером на спину - тянем руки вверх', 1.0, 9, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 70),
('f3d9e787-903f-4012-bc9c-c0070ddf4007', 'Упражнение с эспандером на спину - тянем руки в стороны', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/285.webp', false, 70),
('f9fc3237-6b2d-429a-9309-68f7aeebe190', 'Упражнение с эспандером на спину - тянем руки вниз', 1.0, 19, 'https://static.w.f-365.ru/imported/webp/8/292.webp', false, 70),
('7dc48200-025f-4868-9840-334683f55d80', 'Лодочка', 1.0, 14, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 60),
('f0ebda67-e426-4409-a517-be4546a0752d', 'Вис на перекладине', 1.0, 19, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 50),
('f34f210c-bdc0-4cf5-a95d-47c08fdeb331', 'Лёгкая растяжка на всё тело', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 80),
('9998656d-fbbb-4323-a307-bd89e1887df1', 'Дыхательные упражнения', 1.0, 16, 'https://static.w.f-365.ru/imported/webp/8/150.webp', false, 100);

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'd28b1a9c-920e-43ba-927e-11a2b1fa6b0d'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'd3028a8e-48df-474b-9711-04e11e43c12e'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '3b8016ca-a7bf-462a-994c-72d39ca57b96'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '542bb226-00f6-4589-a4a7-9d965e044174'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '42b0378b-5a88-493c-be43-5454fd1422b1'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'aadde019-fab3-4c4f-9321-b313022a08b9'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '914b49c3-6411-4a85-8c3c-f7613cf52625'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '5e71a855-6014-438e-bce7-80852c05d426'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '9733d444-7879-40a5-9c06-d8fa8f452e06'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '471d2365-39e0-40a5-af3a-e3f6d0080ed4'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'f3d9e787-903f-4012-bc9c-c0070ddf4007'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'f9fc3237-6b2d-429a-9309-68f7aeebe190'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '7dc48200-025f-4868-9840-334683f55d80'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'f0ebda67-e426-4409-a517-be4546a0752d'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', 'f34f210c-bdc0-4cf5-a95d-47c08fdeb331'),
('2ecf8826-deda-11ed-b5ea-0242ac120002', '9998656d-fbbb-4323-a307-bd89e1887df1');

-- Тренировка 3
INSERT INTO workout (id, title, description, calories, media)
VALUES ('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'Тренируем прыжки', 'Основная задача – «взрывная сила»', 1600, 'https://polyfit.live/img/WorkoutImage-2.e28e034b.png');

INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES
('8c2df50b-e540-4b81-8f8d-52aebbdd01ac', 'Ходьба на месте с высоким подниманием коленей', 1.0, 18, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 90),
('15d1ddd0-79e1-4072-96e7-1f47bd3d7138', 'Вращение коленей', 1.0, 13, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 80),
('140731fb-97ae-4eb9-a688-b41507337f12', 'Растяжка переднего бедра', 1.0, 17, 'https://static.w.f-365.ru/imported/webp/8/196.webp', false, 60),
('4e8220c3-1c1b-484b-9bfd-28bce5616dc3', 'Растяжка задней части бедра', 1.0, 11, 'https://static.w.f-365.ru/imported/webp/8/226x225.webp', false, 60),
('ec9a8b9a-c48d-41e7-9fb2-8aee242992b7', 'Растяжка ягодичных мышц', 1.0, 13, 'https://static.w.f-365.ru/imported/webp/8/250.webp', false, 60),
('1c0819d5-138a-49c9-966e-0952442070d8', 'Вращение кистей', 1.0, 17, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 50),
('d995de2a-2982-45e3-8c3f-8869e82e0f38', 'Вращение предплечий', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/276.webp', false, 20),
('d8683844-e54b-4822-ae6e-48d35864f1a0', 'Вращение прямых рук вперёд', 1.0, 18, 'https://static.w.f-365.ru/imported/webp/8/278x277.webp', false, 50),
('9d3354e2-0960-46dd-89dd-6359d7629ebb', 'Вращение прямых рук назад', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 90),
('5ab88559-426a-4b07-a8c0-6bfdc1baa4aa', 'Наклоны корпуса вперёд', 1.0, 5, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 70),
('df1b0cd4-22e4-4c65-b045-490b123a2d36', 'Вращение корпуса в наклоне', 1.0, 3, 'https://static.w.f-365.ru/imported/webp/8/285.webp', false, 60),
('8cf221f8-083b-452a-b077-54d0ccc8d218', 'Бег с подниманием колен', 1.0, 6, 'https://static.w.f-365.ru/imported/webp/8/292.webp', false, 30),
('f7ad53f8-52f1-4813-b0f2-5f39620cb2b6', 'Бег с захлёстом голени назад', 1.0, 9, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 20),
('41efd9d3-2114-4550-9b46-cac98f1bdb55', 'Олений бег', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 90),
('4f9c162b-ee8d-4adf-ad26-de18204a12f1', 'Небольшие прыжки в длину', 1.0, 4, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 90),
('cb8e8c1b-65bf-4635-b497-5f0c77f969f4', 'Прыжки на ноге поочередно', 1.0, 16, 'https://static.w.f-365.ru/imported/webp/8/004x002.webp', false, 70),
('cfab6c5e-7b95-4e12-bf7a-601df89bd08b', 'Приседания', 1.0, 50, 'https://static.w.f-365.ru/imported/webp/8/150.webp', false, 100),
('5c8bfca2-143f-457b-be52-6d1436045b50', 'Поднимание ягодиц лежа на лопатках', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 130),
('507f4f9f-2cae-4089-9788-cba97a1f98ef', 'Поднимание коленей, вторая нога встаёт на носок', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/262.webp', false, 10),
('e99c499e-0b96-48b9-a0fa-50bf34572811', 'Подъёмы на носках', 1.0, 20, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 40),
('d6e94ed4-a3fe-4a07-9e62-cfe826946364', 'Отведение бёдер в сторону', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 50),
('cd68623a-8ee0-4268-adb4-e15607879a41', 'Пружиним на носках', 1.0, 40, 'https://static.w.f-365.ru/imported/webp/8/196.webp', false, 40),
('91378bc0-fafc-47f0-80a3-08f869a69d8f', 'Лёгкая растяжка на всё тело', 1.0, 20, 'https://static.w.f-365.ru/imported/webp/8/250.webp', false, 30),
('87989434-ba05-4bc6-a1eb-ded8a4ddc392', 'Дыхательные упражнения', 1.0, 120, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 15);

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '8c2df50b-e540-4b81-8f8d-52aebbdd01ac'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '15d1ddd0-79e1-4072-96e7-1f47bd3d7138'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '140731fb-97ae-4eb9-a688-b41507337f12'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '4e8220c3-1c1b-484b-9bfd-28bce5616dc3'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'ec9a8b9a-c48d-41e7-9fb2-8aee242992b7'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '1c0819d5-138a-49c9-966e-0952442070d8'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'd995de2a-2982-45e3-8c3f-8869e82e0f38'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'd8683844-e54b-4822-ae6e-48d35864f1a0'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '9d3354e2-0960-46dd-89dd-6359d7629ebb'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '5ab88559-426a-4b07-a8c0-6bfdc1baa4aa'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'df1b0cd4-22e4-4c65-b045-490b123a2d36'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '8cf221f8-083b-452a-b077-54d0ccc8d218'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'f7ad53f8-52f1-4813-b0f2-5f39620cb2b6'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '41efd9d3-2114-4550-9b46-cac98f1bdb55'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '4f9c162b-ee8d-4adf-ad26-de18204a12f1'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'cb8e8c1b-65bf-4635-b497-5f0c77f969f4'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'cfab6c5e-7b95-4e12-bf7a-601df89bd08b'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '5c8bfca2-143f-457b-be52-6d1436045b50'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '507f4f9f-2cae-4089-9788-cba97a1f98ef'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'e99c499e-0b96-48b9-a0fa-50bf34572811'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'd6e94ed4-a3fe-4a07-9e62-cfe826946364'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', 'cd68623a-8ee0-4268-adb4-e15607879a41'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '91378bc0-fafc-47f0-80a3-08f869a69d8f'),
('fbeda55f-f83c-465c-91e7-66bb9b5efc47', '87989434-ba05-4bc6-a1eb-ded8a4ddc392');

-- Тренировка 4
INSERT INTO workout (id, title, description, calories, media)
VALUES ('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'Тренируем нашу выносливость', 'Основная задача – «многоповторка» с ограниченным временем отдыха. Для качественного выполнения упражнений используем регресс (упрощаем выполнение упражнений при утомлении)', 1200, 'https://polyfit.live/img/WorkoutImage-2.e28e034b.png');

INSERT INTO exercise (id, title, hardness, amount, media, show_timer, calories)
VALUES
('e6305359-b714-4d9d-b18c-4bbf15ed0611', 'Ходьба на месте с высоким подниманием коленей', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 50),
('caf2153e-ba7f-487c-8a6d-b37a4c8fd0df', 'Вращение кистей', 1.0, 60, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 123),
('bc9a78be-f3ea-414d-ba55-86ee53faf2ad', 'Вращение предплечий', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/196.webp', false, 70),
('fbd85a53-3704-4bb3-949f-77282b824457', 'Вращение прямых рук вперёд', 1.0, 6, 'https://static.w.f-365.ru/imported/webp/8/226x225.webp', false, 90),
('91be95c5-aa76-46e1-986f-a7546ae10751', 'Вращение прямых рук назад', 1.0, 8, 'https://static.w.f-365.ru/imported/webp/8/250.webp', false, 120),
('4a458765-0afd-40a2-8f61-9f0f91b16ca8', 'Наклоны корпуса вперёд', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/157.webp', false, 110),
('699254da-3115-457e-a275-440c216925f0', 'Вращение корпуса в наклоне', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/262.webp', false, 70),
('4dcec454-d66b-43dc-a79c-704021e11523', 'Подкручивания таза, лёжа на полу', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/276.webp', false, 50),
('9e331768-9150-4149-a6b8-eda003bf07e0', 'Поднимание коленей в упоре на четвереньках', 1.0, 30, 'https://static.w.f-365.ru/imported/webp/8/278x277.webp', false, 30),
('22341cdf-d76c-4d74-b0ae-cdb15c6ab8c0', 'Скручивания', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 20),
('156fd869-bf25-4073-828f-b9864fb283d5', 'Бег в упоре на четвереньках', 1.0, 120, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 40),
('24dd697e-e7b7-4812-a3eb-679f5c6c7f3f', 'Сгибания в коленях, лёжа на спине', 1.0, 30, 'https://static.w.f-365.ru/imported/webp/8/285.webp', false, 120),
('bb310f12-ac3c-4635-a94b-58f45d14094a', 'Махи ногами, лёжа на спине', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/292.webp', false, 120),
('fe8010c7-6328-4b81-83cb-889710f4efaf', 'Скрещивания ног, лёжа на спине', 1.0, 15, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 80),
('01c6b8ad-62b0-4a4e-ae37-a962814b0ab5', 'Лёжа на спине, тянемся к стопам, согнув колени', 1.0, 20, 'https://static.w.f-365.ru/imported/webp/8/001.webp', false, 70),
('b31e47a6-a823-4d9c-8b5c-e32a3766f565', 'Лёгкая растяжка на всё тело', 1.0, 18, 'https://static.w.f-365.ru/imported/webp/8/158.webp', false, 80),
('a4415f60-f5ac-4651-9dd1-5f410808e233', 'Дыхательные упражнения', 1.0, 12, 'https://static.w.f-365.ru/imported/webp/8/002.webp', false, 70);

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'e6305359-b714-4d9d-b18c-4bbf15ed0611'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'caf2153e-ba7f-487c-8a6d-b37a4c8fd0df'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'bc9a78be-f3ea-414d-ba55-86ee53faf2ad'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'fbd85a53-3704-4bb3-949f-77282b824457'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '91be95c5-aa76-46e1-986f-a7546ae10751'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '4a458765-0afd-40a2-8f61-9f0f91b16ca8'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '699254da-3115-457e-a275-440c216925f0'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '4dcec454-d66b-43dc-a79c-704021e11523'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '9e331768-9150-4149-a6b8-eda003bf07e0'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '22341cdf-d76c-4d74-b0ae-cdb15c6ab8c0'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '156fd869-bf25-4073-828f-b9864fb283d5'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '24dd697e-e7b7-4812-a3eb-679f5c6c7f3f'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'bb310f12-ac3c-4635-a94b-58f45d14094a'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'fe8010c7-6328-4b81-83cb-889710f4efaf'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', '01c6b8ad-62b0-4a4e-ae37-a962814b0ab5'),
('e1171cef-e90b-4b59-8ff6-3073c2d86f58', 'b31e47a6-a823-4d9c-8b5c-e32a3766f565');
