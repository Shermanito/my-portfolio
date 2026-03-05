'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Rating } from '@/components/ui/rating'

export type TestimonialItem = {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
  summary: string
}

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[]
}

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const toggleExpand = (index: number) => {
    setExpandedIds(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  const isExpanded = (index: number) => expandedIds.has(index)

  // Check if content would overflow (triggers line-clamp)
  const needsTruncation = (content: string) => {
    // Rough estimate: ~100 chars per line with text-md
    // line-clamp-6 shows ~6 lines, so ~600 chars max visible
    return content.length > 200
  }

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        className='mx-auto flex max-w-7xl gap-12 px-4 max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'
        opts={{
          align: 'start',
          slidesToScroll: 1
        }}
      >
        {/* Left Content */}
        <div className='space-y-4 sm:w-1/2 lg:w-1/3'>
          <p className='text-primary text-sm font-medium uppercase'>Real clients</p>

          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Client Feedback</h2>

          <p className='text-muted-foreground text-xl'>
            From website migrations to performance optimization, here&apos;s what working with me has been like.
          </p>

          <div className='flex items-center gap-4'>
            <CarouselPrevious
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-md disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-md disabled:opacity-100'
            />
          </div>
        </div>

        {/* Right Testimonial Carousel */}
        <div className='relative max-w-196 sm:w-1/2 lg:w-2/3'>
          <CarouselContent className='sm:-ml-6'>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='sm:pl-6 lg:basis-1/2'>
                <Card className='hover:border-primary h-full transition-colors duration-300'>
                  <CardContent className='space-y-5'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-10 rounded-full'>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className='rounded-full text-sm'>
                          {testimonial.name
                            .split(' ', 2)
                            .map(n => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className='flex-1'>
                        <h4 className='font-medium'>{testimonial.name}</h4>
                        <p className='text-muted-foreground text-sm'>
                          {testimonial.role} at{' '}
                          <span className='text-card-foreground font-semibold'>{testimonial.company}</span>
                        </p>
                      </div>
                    </div>

                    {testimonial.summary && (
                      <Badge variant='secondary'>
                        {testimonial.summary}
                      </Badge>
                    )}

                    <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />
                    <div className='space-y-2'>
                      <p
                        className={`text-md ${
                          !isExpanded(index) ? 'line-clamp-6' : ''
                        }`}
                      >
                        {testimonial.content}
                      </p>
                      {needsTruncation(testimonial.content) && (
                        <Button
                          variant='link'
                          className='h-auto p-0'
                          onClick={() => toggleExpand(index)}
                        >
                          {isExpanded(index) ? 'Read less' : 'Read more'}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  )
}

export default TestimonialsComponent
