import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.model';

@Injectable()
export class EventsService {
  private events: Event[] = [];
  private id = 1;

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event {
    const target = this.events.find((event) => event.id === id);
    if (!target) {
      throw new NotFoundException();
    }
    return target;
  }

  createEvent(createEventDto: CreateEventDto): Event {
    const { eventName, location } = createEventDto;
    const event = {
      id: this.id++,
      eventName,
      location,
    };
    this.events.push(event);
    return event;
  }

  deleteEvent(id: number): void {
    const target = this.getEventById(id);
    this.events = this.events.filter((event) => event.id !== target.id);
  }

  updateEventLocation(id: number, location: string): Event {
    // 指定したidのuserを取得。存在しない場合404エラーを返却。
    const target = this.getEventById(id);
    target.location = location;
    return target;
  }
}
