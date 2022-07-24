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
import { Board } from './board.entity';
import { BoardStatus } from './board.status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-valildation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardSerive: BoardsService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardSerive.createBoard(createBoardDto);
  }

  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.boardSerive.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardSerive.getBoardById(id);
  }

  @Delete('/:id')
  deletebOARD(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardSerive.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardSerive.updateBoardStatus(id, status);
  }
}
