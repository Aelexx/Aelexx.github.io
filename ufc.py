#import pandas as pd
# import numpy as np
# import csv
#import openpyxl as xl
# import pyxll
# from openpyxl import Workbook
#from openpyxl.styles import Alignment
# from openpyxl.styles import colors
#from openpyxl.styles import Font
# from openpyxl.workbook.protection import WorkbookProtection
# import xlwings as xw
# import idle
#import subprocess
from tkinter import *
from tkinter import ttk
from tkinter import font
from tkinter import Tk, Button, simpledialog
from functools import partial
import re
import sys
#import keyboard
#from pynput.keyboard import Key, Listener
from tkinter import messagebox
from datetime import datetime
from tkinter import commondialog 


class UFC_fighter:
    def __init__(self, name, score, willpower, finishes, age, winstreak, wellrounded, injuries,
                statistics, fightweek, coaches, interviews, odds, total, date):
        self.name = name
        self.score = score
        self.willpower = willpower
        self.finishes = finishes
        self.age = age
        self.winstreak = winstreak
        self.wellrounded = wellrounded
        self.injuries = injuries
        self.statistics = statistics
        self.fightweek = fightweek
        self.coaches = coaches
        self.interviews = interviews
        self.odds = odds
        self.total = total
        self.date = date
        
        
        root = Tk()
        root.title('UFC fighters')
        # root.lift()
        # root.resizable(1, 1)
        # simpledialog.Dialog.resizable(width=True, height=True, self=True)
        root.overrideredirect(1) # will remove the top badge of window
        mainFrame = ttk.Frame(root, borderwidth=0, relief='ridge', width=1920, height=1080)
        mainFrame.grid(column=10, row=2, padx=0, pady=0, in_=root)
        mainLabel = ttk.Label(root, font='Arial', text='UFC WINNER APP', background="#def190")
        mainLabel.grid(column=10, row=1, padx=10, pady=10, sticky=(N, E, W, S), in_=root)
        labelInScreen = ttk.Label(root, foreground='green', font='Arial', 
                                text='For get result you need input all we need!')
        labelInScreen.grid(column=10, row=2, padx=10, pady=12, sticky=(N, W, E), columnspan=3, in_=root)
        # mainLabel.lift()
        # mainFrame.after(3000, mainFrame.destroy)
        
        
        for child in mainFrame.winfo_children():
            child.configure(background='enable')
            simpledialog.Dialog.minsize(width=0, height=0)
        root.columnconfigure(10, weight=0)
        root.rowconfigure(10, weight=0)
        root.geometry('1920x1080+2+30')
        
        # style = ttk.Style()
        # style.theme_use('default')
        # style.map(mainFrame, lightcolor=[('focus', 'red')])
        
        myFont = font.Font(family='Helvetica', size=18, weight='bold', slant='roman')
        myFont2 = font.Font(family='Helvetica', size=8, weight='bold', slant='roman')
        font.families()
        
        global winStr
        
        nameOfFighter = StringVar()
        
        winStr = 0
        winStr = IntVar()
        lossStr = IntVar()
        drawStr = IntVar()
        NCStr = IntVar()
        
        finStr = 0
        finStr = IntVar() 
        # finStr.get() > winStr.get()
        subattStr = DoubleVar()
        strminStr = DoubleVar()
                    
        finishesStr = IntVar()
        
        ageStr = DoubleVar()
        
        winstreakStr = IntVar()
        
        wrestlingStr = IntVar()
        strikingStr = IntVar()
        
        straccStr = DoubleVar()
        takedownaccStr = DoubleVar()
        signstrdefStr = DoubleVar()
        takedowndefStr = DoubleVar()
        
        injury = DoubleVar()
        fightWeek = DoubleVar()
        coaches = DoubleVar()
        interviews = DoubleVar()
        oddfavor = IntVar()
        oddunderdog = IntVar()
        date = StringVar()
        
        ttk.Button(mainFrame, text='Compute score', command=Name(nameOfFighter),
                    takefocus=1).grid(column=0, row=0)

        # root.after(3000, root.destroy)
        ttk.Button(mainFrame, text='Compute willing', command=Score(winStr, lossStr, drawStr, NCStr),
                    takefocus=1).grid(column=0, row=0)
        
        # root.after(3000, root.destroy)
        ttk.Button(mainFrame, text='Compute finish rate', command=Willing(finStr, subattStr, strminStr),
                    takefocus=1).grid(column=0, row=0)
        
        
        # root.after(3000, root.destroy)
        ttk.Button(mainFrame, text='Compute age', command=FinishRate(winStr, finishesStr),
                    takefocus=1).grid(column=0, row=0)
        
        # root.after(3000, root.destroy)
        ttk.Button(mainFrame, text='Compute win streak', command=Age(ageStr),
                    takefocus=1).grid(column=0, row=0)
        
        ttk.Button(mainFrame, text='Compute well rounded', command=WinStreak(winstreakStr),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Compute stats', command=WellRounded(wrestlingStr, strikingStr),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Compute injury', command=Stats(straccStr, takedownaccStr, signstrdefStr, takedowndefStr),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Compute fight week', command=Injury(injury),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Compute coaches', command=FightWeek(fightWeek),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Compute interviews', command=Coaches(coaches),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Compute odds', command=Interviews(interviews),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='Input date', command=Odds(oddfavor, oddunderdog),
                    takefocus=1).grid(column=0, row=0)
        ttk.Button(mainFrame, text='IDK', command=Date(date),
                    takefocus=1).grid(column=0, row=0)
        root.destroy()
        # root.mainloop()
        
        # for child in mainFrame.winfo_children():
        #     child.grid_configure(padx=1, pady=1)
    
        # win_entry.focus()
        # root.bind("<return>")    
        # ttk.Button(mainFrame, text="Quit", command=root.destroy).grid(column=1, row=10)
        # root.mainloop()   

# w - win, ll - loses, d - draw, n - no contents.
# If lost to un-ranked or out of UFC -1
# CONSTANTA! +3 win over current champion.
# Amateur score out of computing

# Just date of event
dateOfEvent = 0


def Name(nameOfFighter):
    nameOfFighter = simpledialog.askstring('Name of fighter', 'Input first and lastname')
    while not nameOfFighter.replace(' ', '').isalpha():
        # messagebox.showerror("Oops! Only letters allowed", "Input right first and last name")
        print("Only letters are allowed!")
        nameOfFighter = simpledialog.askstring('Name of fighter', 'Input first and lastname')
    print("Name of fighter:", nameOfFighter)


def Score(winStr, lossStr, drawStr, NCStr):
    global sc
    winStr = simpledialog.askinteger('Wins', 'Input wins')
    while winStr == 0:
        winStr = simpledialog.askinteger('Wins', 'Input wins')
    lossStr = simpledialog.askinteger('Losses', 'Input losses')
    drawStr = simpledialog.askinteger('Draws', 'Input draws')
    NCStr = simpledialog.askinteger('NC', 'Input NC')
    sc = (winStr - lossStr + (drawStr)/2 - (NCStr)/2 - 2) * 40
    print("Score:", sc)


# Willpower = finishes + submission attempt + significant strikes

# Maybe first round finishes streak also!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


def Willing(finStr, subattStr, strminStr):
    global wil       
    finStr = simpledialog.askinteger('Finishes', 'Input finishes')
    # while finStr > winStr:
    #     finStr = simpledialog.askinteger('Finishes', 'Input finishes')
    subattStr = simpledialog.askfloat('Sub attempt', 'Input sub attempt per minute')
    strminStr = simpledialog.askfloat('Strikes per minute', 'Input strikes per minute')
    while strminStr == 0:
        strminStr = simpledialog.askfloat('Strikes per minute', 'Input strikes per minute')    
    wil = finStr + (subattStr * 100) * strminStr
    print("Willing to win:", wil)


# Going to subtract when summarize data


def FinishRate(winStr, finishesStr):
    global fin
    winStr = simpledialog.askinteger('Wins', 'Input wins')
    while winStr == 0:
        winStr = simpledialog.askinteger('Wins', 'Input wins')  
    # while winsStr != winStr:
    #     winsStr = simpledialog.askinteger('Wins', 'Input wins')    
    finishesStr = simpledialog.askinteger('Finishes', 'Input finishes')
    fin = (winStr - finishesStr) * 20
    print("Finish rate:", fin)

# 100 - ages with months = result


def Age(ageStr):
    global ages
    ageStr = simpledialog.askfloat('Age', 'Input age of fighter')
    while ageStr <= 17:
        # messagebox.showerror("Oops, 18+ only", "Input right age")
        ageStr = simpledialog.askfloat('Age', 'Input age of fighter')
    ages = (100 - ageStr)
    print("Age rate:", ages)

    # print("No kind of age possible")

# Plus +4 if beat champ


def WinStreak(winstreakStr):
    global winstr
    winstreakStr = simpledialog.askinteger('Win streak', 'Input win streak')
    while winstreakStr == 0:
        winstreakStr = simpledialog.askinteger('Win streak', 'Input win streak')
    winstr = 10 * winstreakStr
    print("Win streak:", winstr)


# Striking and wrestling wins

def WellRounded(wrestlingStr, strikingStr):
    global wl
    wrestlingStr = simpledialog.askinteger('Wins by submission', 'Input submissions')
    strikingStr = simpledialog.askinteger('Wins by striking', 'Input TKOs/KOs')
    wl = (wrestlingStr * strikingStr) * 15
    print("Well-rounded:", wl)

# stracc - strike accuracy, takedownacc - takedown accuracy,
# signstrdef - significant striking defense, takedowndef - takedown defense,



def Stats(straccStr, takedownaccStr, signstrdefStr, takedowndefStr):
    global stats
    straccStr = simpledialog.askfloat('Striking accuracy', 'Input striking accuracy')
    while straccStr == 0:
        straccStr = simpledialog.askfloat('Striking accuracy', 'Input striking accuracy')
    takedownaccStr = simpledialog.askfloat('Takedown accuracy', 'Input takedown accuracy')
    signstrdefStr = simpledialog.askfloat('Significant striking defense', 'Input significant striking defense')
    while signstrdefStr == 0:
        signstrdefStr = simpledialog.askfloat('Significant striking defense', 'Input significant striking defense')
    takedowndefStr = simpledialog.askfloat('Takedown defense', 'Input takedown defense')
    stats = straccStr + takedownaccStr + signstrdefStr + takedowndefStr
    print("Stats of 5:", stats)


def Injury(injury):
    injury = simpledialog.askfloat('Injury before fight overall', 'Percent injury')
    print('Percent of injury:', injury)


def FightWeek(fightWeek):
    fightWeek = simpledialog.askfloat('Fight week behavior', 'Percent behavior')
    while fightWeek == 0:
        fightWeek = simpledialog.askfloat('Fight week behavior', 'Percent behavior')
    print('Percent of behavior:', fightWeek)


def Coaches(coaches):
    coaches = simpledialog.askfloat('Coaches of fighter', 'Percent coaches')
    print('Coaches of fighter:', coaches)


def Interviews(interviews):
    interviews = simpledialog.askfloat('Interviews behavior', 'Percent interview behavior')
    while interviews == 0:
        interviews = simpledialog.askfloat('Interviews behavior', 'Percent interview behavior')
    print('Interviews behavior:', interviews)        


def Odds(oddfavor, oddunderdog):
    global od
    oddfavor = simpledialog.askinteger('Odd after weight-in', 'Input favor odd')
    while oddfavor == 0:
        oddfavor = simpledialog.askinteger('Odd after weight-in', 'Input favor odd')
    oddunderdog = simpledialog.askinteger('Odd after weight-in', 'Input underdog odd')
    while oddunderdog == 0:
        oddunderdog = simpledialog.askinteger('Odd after weight-in', 'Input underdog odd')
    od = abs(oddfavor + oddunderdog) * 2
    print('Odd after weight-in:', od)

    total = sc + wil - fin - ages + winstr + wl + stats - injury + fightWeek + coaches + interviews + odds + dateOfEvent
    print('Total points:', total)


def Date(date):
    date = simpledialog.askstring('Date of event', 'Input date: mm-dd-YYYY')
    while date != datetime.strptime(date, '%m-%d-%Y').strftime('%m-%d-%Y'):
        date = simpledialog.askstring('Date of event', 'Input date: mm-dd-YYYY')
    print('Date of event:', date)


# if injury before fight -100 points


injury = 0

# How good looking fighter on training session
fightWeek = 0

# Coaches how famous
coaches = 0

# Interview behavior
interviews = 0

# Odd of favor - odd of underdog and * 2
odds = 0

total = 0


# ttl = ages + winstr + wl + inju + stats + fw + coach + interv + od


# Excel tab and all we need to start below

# Score = sc
# Willpower = wil

# finishes = fin
# age = ages
# winstreak = winstr
# wellrounded = wl
# injuries = inju
# statistics = stats
# fightweek = fw
# coaches = coach
# interviews = interv
# odds = od
# total = t
# date = dt

# ttl2 = sc + wil

stricklandSean = UFC_fighter(Name, Score, Willing, FinishRate,
                            Age, WinStreak, WellRounded, Stats, Injury,
                            FightWeek, Coaches, Interviews, Odds, total, Date)

dataBill = pd.DataFrame(['Fighter', 'Score', 'Willing', 'FinishRate',
                        'Age', 'WinStreak', 'WellRounded', 'Stats',
                        'injury', 'fightWeek', 'coaches', 'interviews', 'odds',
                        'total', 'dateOfEvent', 'Comment'])

with pd.ExcelWriter('Fighters.xlsx') as writer:
    dataBill.T.to_excel(writer, sheet_name='Computing', startcol=0, startrow=0,
                        index=False)

wb = xl.load_workbook('Fighters.xlsx')

ws = wb.active
ws.protection.password = '12345'
ws.protection.sheet = True
ws.protection.enable()

alignme = Alignment(horizontal='center', vertical='bottom',
                    text_rotation=0, wrap_text=True, shrink_to_fit=True,
                    indent=1)

for col in ws.columns:
    max_length = 0
    column = col[0].column_letter  # Get the column name
    for cell in col:
        try:  # Necessary to avoid error on empty cells
            if len(str(cell.value)) > max_length:
                max_length = len(str(cell.value))

        except: 
            pass
    adjusted_width = (max_length + 3) * 1.5
    ws.column_dimensions[column].width = adjusted_width
    # ws.column_dimensions.alignment = alignme


for row in range(1, 150):
    ws.row_dimensions[row + 1].height = 20

font1 = Font(color='fff125', size=17, bold=True)
font2 = Font(color='ff7000', size=17, bold=True)
font3 = Font(color='502f2f', size=17, bold=True)
font4 = Font(color='f17f25', size=17, bold=True)
font5 = Font(color='00017f', size=17, bold=True)
font6 = Font(color='7f0f25', size=17, bold=True)
font7 = Font(color='f8ff25', size=17, bold=True)
font8 = Font(color='1cff25', size=17, bold=True)
font9 = Font(color='bbff25', size=17, bold=True)
font10 = Font(color='cc1f25', size=17, bold=True)
font11 = Font(color='dd4425', size=17, bold=True)
font12 = Font(color='eef125', size=17, bold=True)
font13 = Font(color='18f325', size=17, bold=True)
font14 = Font(color='19fd25', size=17, bold=True)
font15 = Font(color='201d25', size=17, bold=True)
font16 = Font(color='123456', size=17, bold=True)

ws['A1'].font = font16
ws['B1'].font = font1
ws['C1'].font = font2
ws['D1'].font = font3
ws['E1'].font = font4
ws['F1'].font = font5
ws['G1'].font = font6
ws['H1'].font = font7
ws['I1'].font = font8
ws['J1'].font = font9
ws['K1'].font = font10
ws['L1'].font = font11
ws['M1'].font = font12
ws['N1'].font = font13
ws['O1'].font = font14
ws['P1'].font = font4

ws['A2'].font = font16
ws['B2'].font = font1
ws['C2'].font = font2
ws['D2'].font = font3
ws['E2'].font = font4
ws['F2'].font = font5
ws['G2'].font = font6
ws['H2'].font = font7
ws['I2'].font = font8
ws['J2'].font = font9
ws['K2'].font = font10
ws['L2'].font = font11
ws['M2'].font = font12
ws['N2'].font = font13
ws['O2'].font = font14
ws['P2'].font = font4

# ws.title = 'Computing'
ws2 = wb.create_sheet('Total')
ws1 = wb.active
ws2 = wb.active

sh1 = wb['Computing']
sh1.append([Name, Score, Willing, FinishRate,
                            Age, WinStreak, WellRounded, Stats, Injury,
                            FightWeek, Coaches, Interviews, Odds, total, Date])

for row in ws.iter_rows(min_row=1, min_col=1, max_row=12, max_col=20):
    for cell in row:
        cell.alignment = alignme

wb.save('Fighters.xlsx')
wb.close()


subprocess.Popen('echo "Hi! Have a nice life!"', shell=True)
print(vars(stricklandSean))
