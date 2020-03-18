import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.scss']
})
export class ChatCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  messages: any[] = [];

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
  }
}
