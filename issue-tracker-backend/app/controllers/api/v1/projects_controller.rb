class Api::V1::ProjectsController < ApplicationController
      # namespaced bc of added constroller folders and routes 

    def index 
     
        @projects = Project.all 
        # byebug
        render json: @projects
    end 

    def create
        @project = Project.new(project_params)
        if @project.save 
            render json: @project
        else 
            render json: {error: 'Error creating project'}
        end 
    end 

    # /api/v1/projects/1
    def show 
        @project = Project.find(params[:id])
        render json: @project
    end 
  

    def destroy 
        @project = Project.find(params[:id])
        @project.destroy
    end 

    def update 
        # list = List.find_by(id: params[:id])
        @project = Project.find(params[:id])
        @project.update(name: params["project"]["name"]) # why need to have ["project"] 1st?
        @project.save
        render json: @project
    end 

    # specify the params a project can be created with 
    private
    def project_params
        params.require(:project).permit(:name)
    end 
end
