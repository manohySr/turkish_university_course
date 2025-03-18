package com.example.backjava.exception;

import org.springframework.http.HttpStatus;

public class ErrorResponse {
  private String message;
  private int statusCode;

  public ErrorResponse(String message, HttpStatus status) {
    this.message = message;
    this.statusCode = status.value();
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public int getStatusCode() {
    return statusCode;
  }

  public void setStatusCode(int statusCode) {
    this.statusCode = statusCode;
  }
}
