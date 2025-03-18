package com.example.backjava.controller;

import com.example.backjava.exception.ErrorResponse;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NoHandlerControllerError implements ErrorController {

  @RequestMapping("/error")
  public ResponseEntity<Object> handleError() {
    // Return a custom JSON error response for all unhandled errors (like 404)
    ErrorResponse errorResponse = new ErrorResponse("The page you requested could not be found.", HttpStatus.NOT_FOUND);
    return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
  }

}
