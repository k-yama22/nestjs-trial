import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';

describe('EventsController', () => {
  let eventsController: EventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [EventsController],
    }).compile();

    eventsController = module.get<EventsController>(EventsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventsController.getEvents()).toBe('Hello World!');
    });
  });
});
