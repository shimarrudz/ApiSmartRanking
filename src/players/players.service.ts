import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  private readonly logger = new Logger(PlayersService.name);

  async createUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    this.create(createPlayerDto);
  }

  private create(createPlayerDto: CreatePlayerDto): void {
    const { name, phone, email } = createPlayerDto;
    const player: Player = {
      _id: uuid(),
      name,
      phone,
      email,
      ranking: 'A',
      position: 1,
      urlPlayerPhoto: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`createPlayerDto: ${JSON.stringify(player)}`);
    this.players.push(player);
  }
}
