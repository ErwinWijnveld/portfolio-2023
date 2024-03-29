import spinning from '@/assets/images/spinning.jpeg'
import spotsquat from '@/assets/images/spotsquat.jpeg'

export const projects = [
    {
        id: 1,
        title: 'Strive Sports',
        slug: 'strive-sports',
        meta: {
            seo_title: 'Strive Sports - Projecten',
            seo_description: 'Strive Sports is een personal training studio in Arnhem. Wij helpen jou om je doelen te bereiken.',
        },
        thumbnail: {
            image: spinning,
            alt: 'Personal trainer die een client helpt en een squat uitvoert'
        },
    }
]

export const projectsMeta = {
    slug: 'projecten',
    featured: projects[0]
}