import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventLocationValidationPipe } from './pipes/event-location-check-validation.pipe';

import { Event } from './event.model';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Get()
  getEvents(): { id: number; eventName: string; location: string }[] {
    return this.eventService.getEvents();
  }

  @Get(':id')
  getEventById(@Param('id', ParseIntPipe) id: number): Event {
    return this.eventService.getEventById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  // @Bodyでrequest.bodyを全取得。
  createEvent(@Body() createEventDto: CreateEventDto): Event {
    return this.eventService.createEvent(createEventDto);
  }

  @Delete(':id')
  deleteEvent(@Param('id', ParseIntPipe) id: number): void {
    return this.eventService.deleteEvent(id);
  }

  @Patch(':id/age')
  updateEventLocation(
    @Param('id', ParseIntPipe) id: number,
    @Body('location', EventLocationValidationPipe) location: string,
  ): Event {
    return this.eventService.updateEventLocation(id, location);
  }
}
