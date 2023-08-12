-- CreateTable
CREATE TABLE "movie_master" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(500),
    "type" VARCHAR(500),
    "release_date" VARCHAR(255),
    "director" VARCHAR(255),
    "budget" VARCHAR(255),
    "story_line" VARCHAR(900),
    "cast_name" VARCHAR(500),
    "trailer_link" VARCHAR(500),

    CONSTRAINT "movie_master_pkey" PRIMARY KEY ("id")
);

