const JsonEndpointCode = `package com.itm.digital.automotive.rest;

import com.itm.digital.automotive.model.ProjectProductInYearSummary;
import com.itm.digital.automotive.service.IProjectProductInYearSummary;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("ppinyear")
public class ProjectProductInYearSummaryEndpoint {
  
  @Inject
  IProjectProductInYearSummary iProjectProductInYearSummary;
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<ProjectProductInYearSummary> getAll(){
    return iProjectProductInYearSummary.findAll();
  }
  
}`
export default JsonEndpointCode