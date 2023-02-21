from tkinter import *
from tkinter.ttk import *
from PIL import Image,ImageTk
                               

class Face:
    def __init__(self,root):
        self.root=root
        self.root.geometry("1530x790+0+0")
        self.root.title("FACE")

        img=Image.open(r"Pictures\h.jpeg")
        img=img.resize((500,130),Image.ANTIALIAS)
        self.photoimg=ImageTk.PhotoImage(img)
        f_lbl=Label(self.root,image=self.photoimg)
        f_lbl.place(x=0,y=0,width=500,height=130)



if __name__=="_main_":
    root=Tk()
    obj=Face(root)
    root.mainloop()
